import axios from "axios";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("/api/contacts", formData);
      if (response.status === 200) {
        toast({
          variant: "success",
          description: "Form Submitted Successfully",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong",
      });
    }

    setIsLoading(false);
  };
  return (
    <div className="pb-20">
      <div
        className="p-[24px] bg-[#f7f5f1] rounded-[15px] mx-[12px] aos-init aos-animate pb-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex flex-wrap mb-[-24px]">
          <div className="lg:w-1/2 lg:pr-[12px] pr-[0] pl-[0] mb-[24px] w-full">
            <div className="lh-contact-touch-inner">
              <div className="lh-contact-touch-contain">
                <h4 className="text-[#000] pb-[15px] 2xl:text-[28px] xl:text-[26px] lg:text-[24px] font-bold md:text-[22px] sm:text-[20px] text-[18px]">
                  Get In Touch With Us Feel Free To Write Us
                </h4>
                <p>
                  This is the dolor consectetur adpisicing elit. Deleniti quam
                  exercitationem a expedita natus quisquam. Deleniti Facere
                  exercitationem ratione nihil Deleniti delectus possimus!
                </p>
              </div>
              <div className="pt-[30px]">
                <form onSubmit={handleSubmit} action="#">
                  <div className="flex xl:mb-[30px] mb-[15px]">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name*"
                      className="border-0 bg-[#fff] pl-[20px] outline-[0] h-[50px] w-full rounded-[15px] mr-[30px]"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email*"
                      className="border-0 bg-[#fff] pl-[20px] outline-[0] h-[50px] w-full rounded-[15px]"
                    />
                  </div>
                  <div className="flex xl:mb-[30px] mb-[15px]">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Your Subject*"
                      className="border-0 bg-[#fff] pl-[20px] outline-[0] h-[50px] w-full rounded-[15px]"
                    />
                  </div>
                  <div className="flex xl:mb-[30px] mb-[15px]">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message*"
                      className="border-0 bg-[#fff] outline-none px-[20px] py-[15px] h-[150px] w-full rounded-[15px]"
                    />
                  </div>
                  <button
                    className="m-[auto] text-center hover-btn-zoom duration-[0.3s] ease-in-out border-[1px] border-solid border-orange-400 px-[15px] py-[5px] leading-[28px] bg-purple-600 text-white relative z-[2] text-[15px] font-medium tracking-[1px] rounded-[10px] hover:bg-inherit hover:text-[#ed5b31]"
                    type="submit"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-[12px] pr-[0] pl-[0] mb-[24px] w-full">
            <div className="h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29749.225774882685!2d72.84343101893258!3d21.245595574425934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1690017805909!5m2!1sen!2sin"
                className="w-full h-full mb-[-10px] rounded-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
