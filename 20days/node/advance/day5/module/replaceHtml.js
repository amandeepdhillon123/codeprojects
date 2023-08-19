
module.exports =function replaceHtml(template, product) {
    let output = template.replace("{{%name%}}", product.name);
  
    output = output.replace("{{%username%}}", product.username);
    output = output.replace("{{%email%}}", product.email);
    output = output.replace("{{%phone%}}", product.phone);
    output = output.replace("{{%website%}}", product.website);
    output = output.replace("{{%ID%}}", product.id);
    return output;
  }