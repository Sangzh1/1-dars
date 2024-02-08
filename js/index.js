
        function Malumotkrtish() {
          let age = prompt('yoshingizni kiriting...');
          if (!age || age >= 1000) {
             age = prompt('XATOLIK_qayta kiriting!');
            
          }
          let phone_number = /^\+\d{12}$/;
          let phoneNumber = prompt('telefon raqamingizni kiritng...');
         if (phone_number(phoneNumber)) {
             console.log(true);
         } else {
             alert('XATOLIK_qayta kiriting!');
             
         }
     
         let userg_Mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         let email = prompt('elektron pochtangzni kiritng...');
         if (userg_Mail(email)) {
             alert('XATOLIK_qayta kiriting!');
             
         }
     return false;
     }
     
     
     Malumotkrtish();