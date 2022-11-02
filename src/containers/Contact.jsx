import React, { useState } from 'react'
import { send } from 'emailjs-com';

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    subject: '',
    message: '',
    reply_to: '',
  });
const serviceid =  process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateid = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userid = process.env.REACT_APP_EMAILJS_USER_ID;

   const onSubmit = (e) => {
    e.preventDefault();
    send(
      serviceid,
      templateid,
      toSend,
      userid
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Thank you for contacting me. I will respond to your message as soon as I can.");
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact"><h2 className="lg:text-[40px] md:text-[30px] text-[27px] text-light-black text-center mt-[80px] mb-[5px] font-[700]">LET'S GET IN TOUCH</h2>
        <div className="flex justify-center"> <p className="border-b-cognac border-solid border-b-[3px] w-[300px] md:w-[350px] lg:w-[500px] text-center rounded-[2px]"></p></div>
        <p className="text-[24px] lg:text-[28px] text-light-black font-[500] text-center mt-[30px] mb-[20px]">I'm always interested in hearing about new projects and opportunities.

</p>
<div className="">
  <form className="flex flex-col items-center p-[20px]" onSubmit={onSubmit}>
   
<div className="flex flex-row ">
    <div className="mx-[5px]">
      <input type="text" name="Name" className="outline-cognac px-[10px] md:px-[20px] py-[10px] rounded-[10px] bg-nude text-black text-[17px] w-[140px] md:w-[300px] lg:w-[400px]" value={toSend.from_name}
    onChange={handleChange} placeHolder="Your Name" />
    </div>
    <div className="mx-[5px]">
      <input type="email" name="Email" className="outline-cognac px-[10px] md:px-[20px] py-[10px] rounded-[10px] bg-nude text-black text-[17px] w-[140px] md:w-[300px] lg:w-[400px]" placeHolder="Email address" value={toSend.reply_to}
    onChange={handleChange}/>
    </div>
</div>
    <div className="my-[10px]">
      <input type="text" name="Subject" className="outline-cognac px-[10px] md:px-[20px] py-[10px] rounded-[10px] bg-nude text-black text-[17px] w-[290px] md:w-[610px] lg:w-[810px]" placeHolder="Subject" value={toSend.subject}
    onChange={handleChange}/>
    </div>
    <div className="my-[10px] flex justify-center">
      <textarea name="Message"  cols="30" rows="10"  className="md:px-[20px] px-[10px] py-[10px] outline-cognac rounded-[10px]  bg-nude text-darkgray text-[17px] w-[290px] md:w-[610px] lg:w-[810px]" value={toSend.message}
    onChange={handleChange}>Message</textarea>
     
    </div>
    <div className="my-[10px]">
      <button type="submit" className="px-[20px] py-[10px] text-[16px] rounded-[5px] bg-black text-white outline-none">Send Message</button>
    </div>
   
  </form>
</div>
        </div>
  )
}

export default Contact