  ---------------------make api--------------------- 

  const http =reaquire('http')

  http( (req,resp) =>{
    resp.writeHead("  name ":"sdfnsf")
    resp.writeFile(JSON.strinfgy({name:"amandeep" ,surname:"jaatboy"}))
    resp.end();
  }).listen(21000);


  <!--  add  ultioel data  -->

  data =[
    {name:"amamdeep" ,surname:"dhilln" },

      {name:"amamdeep" ,surname:"dhilln" },
        {name:"amamdeep" ,surname:"dhilln" },
          {name:"amamdeep" ,surname:"dhilln" }

  
  
  ]

  <!-- import  -->
  cont ram =require('./data)

    http( (req,resp) =>{
    resp.writeHead("  name ":"sdfnsf")
    resp.writeFile(JSON.strinfgy(data))
    resp.end();
  }).listen(21000);