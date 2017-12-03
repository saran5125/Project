var express = require('express')
var router = express.Router()

var arr = [
    {id: 0, name: 'Ned', lastname:'Stark', email:'ned@winterfell.com', phone:'223-456-7890', url:'www.google1.com', notes: 'Winter is coming.'},
    {id: 1, name: 'Theon', lastname:'Greyjoy', email:'tgreyjoy@winterfell.com', phone:'123-456-7890', url:'www.google2.com', notes: 'Reluctant to pay iron price.'},
    {id: 2, name: 'Samwell', lastname:'Tarly', email:'starly@castleblack.com', phone:'323-456-7890', url:'www.google3.com', notes: 'Loyal brother of the watch.'},
    {id: 3, name: 'Jon', lastname:'Snow', email:'jsnow@castleblack.com', phone: '423-456-7890', url: 'www.google4.com', notes: 'Knows nothing.'},
    {id: 4, name: 'Arya', lastname:'Stark', email:'waterdancer@winterfell.com', phone:'523-456-7890', url:'www.google5.com', notes: 'Has a list of names.'},
    {id: 5, name: 'Jora', lastname:'Mormont', email:'khaleesifan100@gmail.com', phone:'623-456-7890', url:'www.google6.com', notes: 'Lost in the friend-zone.'},
    {id: 6, name: 'Tyrion', lastname:'Lannister', email:'tyrion@lannister.com', phone:'723-456-7890', url:'www.google7.com', notes: 'Currently drunk.'},
    {id: 7, name: 'Stannis', lastname:'Baratheon', email:'onetrueking@dragonstone.com', phone:'823-456-7890', url:'www.google8.com', notes: 'Nobody expects the Stannish inquisition.'},
    {id: 8, name: 'Hodor', lastname:'juleg', email:'hodor@hodor.com', phone:'923-456-7890', url:'www.google9.com', notes: 'Hodor? Hodor... Hodor!'},
    {id: 9, name: 'Margaery', lastname:'Tyrell', email:'mtyrell@highgarden.com', phone:'103-456-7890', url:'www.google10.com', notes: 'Keeper of kings.'},
    {id: 10, name: 'Brienne', lastname:'Tarth', email:'oathkeeper@gmail.com', phone:'113-456-7890', url:'www.google11.com', notes: 'Do not cross her.'},
    {id: 11, name: 'Petyr', lastname:'Baelish', email:'petyr@baelishindustries.com', phone:'133-456-7890', url:'www.google12.com', notes: 'Do not trust anyone.'},
  ];

  router.get('/',(req,res)=>{
    if(req.query.id!=null)
    {
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].id==req.query.id)
            {
                res.json(arr[i])
            }
        }
    }   
    if(req.query.name!=null)
    {
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].name==req.query.name)
            {
                res.json(arr[i])
            }
        }
    }
    else if(req.query.lastname!=null)
    {
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].lastname==req.query.lastname)
            {
                res.json(arr[i])
            }
        }
    }
    else if(req.query.email!=null)
    {
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].email==req.query.email)
            {
                res.json(arr[i])
            }
        }
    }
    else if(req.query.phone!=null)
    {
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].phone==req.query.phone)
            {
                res.json(arr[i])
            }
        }
    }
    else if(req.query.url!=null)
    {
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].url==req.query.url)
            {
                res.json(arr[i])
            }
        }
    }
    else if(req.query.notes!=null)
    {
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].notes==req.query.notes)
            {
                res.json(arr[i])
            }
        }
    }
    else
    {
        res.json(arr)
    }
})
router.get('/:id',(req,res)=>{
    var id1 = req.params.id
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i].id == id1)
        {
            res.json(arr[i])
            break;
        }
    }
})
router.put('/:id',(req,res)=>{
    var id1 = req.params.id
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i].id == id1)
        {
            if(arr[i].id!=null)
            {
                arr[i].id = req.body.id
            }
            if(arr[i].name!=null)
            {
                arr[i].name = req.body.name
            }
            if(arr[i].lastname!=null)
            {
                arr[i].lastname = req.body.lastname
            }
            if(arr[i].email!=null)
            {
                arr[i].email = req.body.email
            }
            if(arr[i].url!=null)
            {
                arr[i].url = req.body.url
            }
            if(arr[i].phone!=null)
            {
                arr[i].phone = req.body.phone
            }
            if(arr[i].notes!=null)
            {
                arr[i].notes = req.body.notes
            }
            break;
        }
    }
})