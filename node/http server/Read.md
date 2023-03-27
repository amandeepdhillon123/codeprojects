
  --------basic server output --------

  -----create server

   http.createServer((req,resp) => {

    resp.write(" hell world");
    resp.end();
   }).listen(4500)

   =========function as paramete============

   function name(req,resp){
         resp.write(" hell world");
    resp.end();
   }

   http.createServer(name).listen(4500)


   =====  arraow function ========

      http.createServer((req,res) =>).listen(4500)



