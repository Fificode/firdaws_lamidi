import React, { useState, useRef} from 'react'
import { send } from 'emailjs-com';

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    subject: '',
    message: '',
    reply_to: '',
  });
  const [status, setStatus] = useState(null);
 const form = useRef();

const onSubmit = (e) => {
   
    e.preventDefault();
    // console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    // console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    // console.log(process.env.REACT_APP_EMAILJS_USER_ID);
    send(
       process.env.REACT_APP_EMAILJS_SERVICE_ID,
       process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((response) => {
       
        setToSend({
    from_name: '',
    subject: '',
    message: '',
    reply_to: '',
  });
  console.log(response);
        setStatus("SUCCESS");  
        console.log('SUCCESS!', response.status, response.text);
        alert("Thank you for contacting me. I will respond to your message as soon as I can.");
      })
      .catch((err) => {
        setStatus("ERROR");
        console.log('FAILED...', err);
      }); 
      form.current.reset();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact"><h2 className="lg:text-[40px] md:text-[30px] text-[27px] text-light-black text-center mt-[80px] mb-[5px] font-[700]">LET'S GET IN TOUCH</h2>
        <div className="flex justify-center"> <p className="border-b-cognac border-solid border-b-[3px] w-[300px] md:w-[350px] lg:w-[500px] text-center rounded-[2px]"></p></div>
        <p className="text-[23px] lg:text-[28px] text-light-black font-[400] text-center mt-[30px] mx-[10px] mb-[20px]">I'm always interested in hearing about new projects and opportunities.

</p>
{status === "SUCCESS" && (
          <p className='text-[20px] leading-[30px]  md:text-[24px] font-[600] tracking-[0.0015em] md:leading-[36px] text-cognac text-center m-3'>Thank you for contacting me!</p>
      )}
       {status === "ERROR" && (
        <div className="flex flex-col items-center m-3"> <p className='text-[20px] leading-[30px]  md:text-[24px] font-[500] tracking-[0.0015em] md:leading-[36px] text-black text-center'>Oops, something went wrong...</p>
          <p className='text-[20px] leading-[30px]  md:text-[24px] font-[500] tracking-[0.0015em] md:leading-[36px] text-black text-center'>
            Please, <button className='text-underline text-red' onClick={() => setStatus(null)}>click here</button> to try again.
          </p></div>
      )}
<div>
  {status === null && (<form className="flex flex-col items-center p-[20px]" ref={form} onSubmit={onSubmit}>
   <div className="flex flex-row ">
    <div className="mx-[5px]">
      <input type="text" name="from_name" className="outline-cognac px-[10px] md:px-[20px] py-[10px] rounded-[10px] bg-nude text-black text-[17px] w-[140px] md:w-[300px] lg:w-[400px]" value={toSend.from_name}
    onChange={handleChange} placeholder="Your Name" autoComplete="off" required/>
    </div>
    <div className="mx-[5px]">
      <input type="email" name="reply_to" className="outline-cognac px-[10px] md:px-[20px] py-[10px] rounded-[10px] bg-nude text-black text-[17px] w-[140px] md:w-[300px] lg:w-[400px]" placeholder="Email address" value={toSend.reply_to}
    onChange={handleChange} autoComplete="off" required/>
    </div>
</div>
    <div className="my-[10px]">
      <input type="text" name="subject" className="outline-cognac px-[10px] md:px-[20px] py-[10px] rounded-[10px] bg-nude text-black text-[17px] w-[290px] md:w-[610px] lg:w-[810px]" placeholder="Subject" value={toSend.subject}
    onChange={handleChange} autoComplete="off" required/>
    </div>
    <div className="my-[10px] flex justify-center">
      <textarea name="message"  cols="30" rows="10"  className="md:px-[20px] px-[10px] py-[10px] outline-cognac rounded-[10px]  bg-nude text-black text-[17px] w-[290px] md:w-[610px] lg:w-[810px]" value={toSend.message}
    onChange={handleChange} placeholder="Message" autoComplete="off" required></textarea>
     
    </div>
    <div className="my-[10px]">
      <button type="submit" className="px-[20px] py-[10px] text-[16px] rounded-[5px] bg-black text-white outline-none">Send Message</button>
    </div>
   
  </form>)}
  
</div>
        </div>
  )
}

export default Contact