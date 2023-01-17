function load()
{
    var ate,bur;
    ate = localStorage.getItem('ate')
    bur = localStorage.getItem('bur')
    if(ate==null){localStorage.setItem('ate',0)}
    if(bur==null){localStorage.setItem('bur',0)}
    var tot = ate - bur;
    document.getElementById('total').textContent = tot

    var ate_names = JSON.parse(localStorage.getItem('ateN'))
    var bur_names = JSON.parse(localStorage.getItem('burN'))
    var ates = JSON.parse(localStorage.getItem('ates'))
    var burs = JSON.parse(localStorage.getItem('burs'))
    if(ate_names==null){localStorage.setItem('ateN',JSON.stringify(['item number one']))}
    if(bur_names==null){localStorage.setItem('burN',JSON.stringify(['item number one']))}
    if(ates==null){localStorage.setItem('ates',JSON.stringify(['item number one']))}
    if(burs==null){localStorage.setItem('burs',JSON.stringify(['item number one']))}

    var ate_data_table = document.getElementById('ate_data');
    var i = 1;
    ate_data_table.innerHTML=`
    <tr>
    <td><span>name</span></td>
    <td><span>calories</span></td>
    </tr>
    `
    while(i<ate_names.length)
    {
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <td><span>${ate_names[i]}</span> </td>
            <td><span>+${ates[i]}</span></td>
        `
        ate_data_table.appendChild(tr)
        i++;
    }
    i = 1;
    while(i<bur_names.length)
    {
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <td><span>${bur_names[i]}</span> </td>
            <td><span>-${burs[i]}</span></td>
        `
        ate_data_table.appendChild(tr)
        i++;
    }
}

function clearItems()
{
    localStorage.setItem('ate',0);
    localStorage.setItem('bur',0);
    localStorage.setItem('burN',JSON.stringify(['item number one']))
    localStorage.setItem('ateN',JSON.stringify(['item number one']))
    localStorage.setItem('ates',JSON.stringify(['item number one']))
    localStorage.setItem('burs',JSON.stringify(['item number one']))
    load()
}

function ate()
{
    document.getElementById('add_bur_cont').innerHTML = `
    <p>please enter the name and calories : </p>
    <div class="inp_con">
        <input placeholder="name" type="text" id="name" />
        <input placeholder="calories" type="number" id="calories" />
    </div>
    <button onclick="add('ate')">add</button>
    `
}

function bur()
{
    document.getElementById('add_bur_cont').innerHTML = `
    <p>please enter the name and calories : </p>
    <div class="inp_con">
        <input placeholder="name" type="text" id="name" />
        <input placeholder="calories" type="number" id="calories" />
    </div>
    <button onclick="add('bur')">add</button>
    `
}
function close()
{
    document.getElementById('add_bur_cont').innerHTML=""
}

function add(type)
{
    var name = document.getElementById('name').value;
    var cal = parseInt(document.getElementById('calories').value)
    if(type == 'bur')
    {
        var current = parseInt(localStorage.getItem('bur'))
        localStorage.setItem('bur',current+cal);

        var current2 = JSON.parse(localStorage.getItem('burs'));
        current2.push(cal)
        localStorage.setItem('burs',JSON.stringify(current2))

        var current3 = JSON.parse(localStorage.getItem('burN'));
        current3.push(name)
        localStorage.setItem('burN',JSON.stringify(current3))
        load()
        close()
    }else{
        var current = parseInt(localStorage.getItem('ate'))
        localStorage.setItem('ate',current+cal);

        var current2 = JSON.parse(localStorage.getItem('ates'));
        current2.push(cal)
        localStorage.setItem('ates',JSON.stringify(current2))

        var current3 = JSON.parse(localStorage.getItem('ateN'));
        current3.push(name)
        localStorage.setItem('ateN',JSON.stringify(current3))
        load()
        close()
    }
}