import { useState, useRef } from "react";
import { HeaderSection } from "../AiPractice/HeaderSection";
import AlsoAsked from "./AlsoAsked";
import MyMsg from "./MyMsg";
import AiMsg from "./AiMsg";

type Message = {
    id: number;
    type: 'user' | 'ai';
    text: string;
};

const FAQ: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [messageId, setMessageId] = useState(0);
    const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    const array = [
        { question: "What is Hifzi?", answer: "Hifzi is a comprehensive Quran learning application that helps you memorize and understand the Quran through interactive lessons and AI-powered practice sessions." },
        { question: "How does the AI practice work?", answer: "Our AI practice uses advanced algorithms to create personalized learning experiences, adapting to your progress and providing real-time feedback on your recitation." },
        { question: "Can I learn Arabic from scratch?", answer: "Yes! Our application includes complete Arabic learning modules, from basic alphabet recognition to advanced grammar, all integrated with Quranic studies." },
    ];

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {

            messagesContainerRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            });


        }
    };

    const handleQuestionClick = (question: string, answer: string) => {
        const userMessageId = messageId;
        const aiMessageId = messageId + 1;


        setIsWaitingForResponse(true);

        setMessages(prev => [...prev, {
            id: userMessageId,
            type: 'user',
            text: question
        }]);

        setMessageId(prev => prev + 2);
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: aiMessageId,
                type: 'ai',
                text: answer
            }]);
            setIsWaitingForResponse(false);
            setTimeout(() => scrollToBottom(), 100);
        }, 1000);
    };






    return (
        <div id="faq" className="min-h-screen bg-white flex flex-col items-center relative z-[11] w-[96%] m-auto rounded-b-[52px]">
            <HeaderSection
                topic="FAQ"
                text="Most Common Questions"
            />
            <div
                ref={messagesContainerRef}
                className="relative w-[920px] mt-[70px] rounded-[52px] flex flex-col gap-[40px] mb-[100px]"
            >

                <MyMsg
                    text="Do I need to understand Arabic in order to learn the Quran from scratch?"
                />

                <AiMsg
                    text="In our application you can learn Arabic, the theory of Mahraj and Tajweed, listen and read the Quran, regardless of the level of training"
                />


                {messages.map((message) => (
                    message.type === 'user' ? (
                        <MyMsg key={message.id} text={message.text} />
                    ) : (
                        <AiMsg key={message.id} text={message.text} />
                    )
                ))}

                {!isWaitingForResponse && (
                    <AlsoAsked
                        items={array}
                        onQuestionClick={handleQuestionClick}
                    />
                )}
            </div>
        </div>
    )
};

export default FAQ;