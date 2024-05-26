import { useState } from "react";
import { Button } from "./ui/button"; // Ensure these imports match your project structure
import { Input } from "./ui/input";
import { Send } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "What is your name?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [currentField, setCurrentField] = useState("name");

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\d{10}$/.test(phone);
  };

  const handleSend = () => {
    if (inputValue.trim() === "") return; // Prevent empty input
    const newUserMessage = { text: inputValue, sender: "user" };
    const newMessages = messages.concat(newUserMessage);

    // Add user message immediately
    setMessages(newMessages);
    setInputValue("");

    // Delay before adding bot response
    setTimeout(() => {
      let botMessage;
      switch (currentField) {
        case "name":
          setCurrentField("email");
          botMessage = { text: "What is your email?", sender: "bot" };
          break;
        case "email":
          if (!validateEmail(inputValue)) {
            botMessage = {
              text: "Please enter a valid email.",
              sender: "bot",
            };
          } else {
            setCurrentField("phone");
            botMessage = { text: "What is your phone number?", sender: "bot" };
          }
          break;
        case "phone":
          if (!validatePhone(inputValue)) {
            botMessage = {
              text: "Please enter a valid phone number.",
              sender: "bot",
            };
          } else {
            botMessage = {
              text: "Thanks! We will get back to you soon.",
              sender: "bot",
            };
            setCurrentField("done");
          }
          break;
        default:
          botMessage = {
            text: "Our conversation is over. Thank you!",
            sender: "bot",
          };
          break;
      }

      setMessages((messages) => [...messages, botMessage]);
    }, 1000); // 1000 milliseconds = 1 second delay
  };

  return (
    <div className=" bottom-0  max-h-[80vh] overflow-y-auto bg-white shadow-md p-2">
      {/* chats will show here */}
      <div className="grid grid-cols-1 gap-4 pb-4 rounded-lg">
        {messages.map((chat, index) => (
          <div
            key={index}
            className={`flex ${
              chat.sender === "user" ? "justify-end" : "justify-start"
            } `}
          >
            <div
              className={`rounded-lg p-2 px-4 w-fit ${
                chat.sender === "user" ? "bg-emerald-300" : "bg-fuchsia-300"
              }`}
            >
              <div>
                <p
                  className={
                    chat.sender === "user" ? "text-xs" : "text-blue-800 text-xs"
                  }
                >
                  {chat.sender === "user" ? "You" : "Bot"}
                </p>
                <div className="flex items-center">
                  <h1 className="">{chat.text}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
        {currentField !== "done" && (
          <div className="flex flex-row p-2">
            <Input
              placeholder="Type here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="mb-2 py-[-2] border border-black"
            />
            <Button onClick={handleSend} className="ml-2 py-2">
              <Send className="" size={20} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
