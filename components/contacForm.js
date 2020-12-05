import emailjs from 'emailjs-com';

export default function ContactForm() {
    

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_0j3adn4', 'template_eaz4nwk', e.target, 'user_6WkwRZ8UZI0x4p2nkNFim')
          .then((result) => {
              console.log(result.text);
              
          }, (error) => {
              console.log(error.text);
          });
          
      }

  return (
    <div className="container">
      <form className="contact-form" onSubmit={sendEmail}>
          
        <div className="inputContainer">
        <input className="txt" type="text" name="user_name" placeholder="Nombre"/>
        
        <input className="txt" type="email" name="user_email" placeholder="Correo"/>
        </div>
        

        <textarea name="message" placeholder="Mensaje"/>
        <input className="btnForm" type="submit" value="ENVIAR" />
      </form>
      <style jsx>
        {`
        .btnForm{
            height:55px;
            border-style:none;
            border-radius:3px;
            padding: 20px;
            font-size:16px;
            outline: none;
            font-weight:bold;
        }
        .btnForm:hover{
            cursor:pointer;
        }
        .inputContainer{
            width:100%;
            display:flex;
            justify-content:space-between;
            flex-wrap: wrap;
            
        }
        textarea{
            height:150px;
            border-style:none;
            background-color:#f4f6f7;
            border:1px solid #dfe5e8;
            outline: none;
            border-radius:3px;
            padding: 20px;
            font-size:16px;
            font-family:Arial;
            
        }
        .txt{
            height:10px;
            border-style:none;
            background-color:#f4f6f7;
            border:1px solid #dfe5e8;
            outline: none;
            border-radius:3px;
            padding: 20px;
            font-size:16px;
            
        }
        .container{
            display:flex;
           flex-direction:column;
            width:40%;
            padding: 100px;
        }
        @media screen and (max-width: 1200px) {
            .container{
                display:flex;
           flex-direction:column;
           align-items:center;
            width:100%!important;
            padding: 70px;
        }
        form {
           display:flex;
           justify-content:space-around;
           flex-direction:column;
           height:400px;
           width:70%!important;
           
          }
          .txt{
            height:10px;
            border-style:none;
            background-color:#f4f6f7;
            border:1px solid #dfe5e8;
            outline: none;
            border-radius:3px;
            padding: 20px;
            font-size:16px;
            width:100%;
            
        }
        .inputContainer{
            height:140px;
        }
        }

        @media screen and (max-width: 700px) {
            form {
           display:flex;
           justify-content:space-around;
           flex-direction:column;
           height:400px;
           width:100%!important;
           
          }
          .container{
            display:flex;
           flex-direction:column;
            width:40%;
            padding:30px;
        }
        }

          form {
           display:flex;
           justify-content:space-around;
           flex-direction:column;
           height:400px;
           
           width:100%;
           

          }
        `}
      </style>
    </div>
  );
}
