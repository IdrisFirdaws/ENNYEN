import React, { useState, useEffect } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SectionSeven() {
    const [activeIndex, setActiveIndex] = useState(0);

    const photoContents = [
        {
            imgSrc: "images/Rectangle 68.png",
            name: "john doe",
            position: "CEO of flash.co",
            text1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem quia cupiditate dolorum ipsam? Voluptatem quod eum iure sequi quibusdam, voluptatibus ea. Quaerat molestiae ratione dignissimos vero praesentium iusto architecto.",
            text2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quis dolorem, accusamus distinctio fuga enim eum. Ad doloribus doloremque sed."
        },
        {
            imgSrc: "images/slide/Rectangle_51.png",
            name: "jane doe",
            position: "CTO of flash.co",
            text1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem quia cupiditate dolorum ipsam? Voluptatem quod eum iure sequi quibusdam, voluptatibus ea.",
            text2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quis dolorem, accusamus distinctio fuga enim eum."
        },
        {
            imgSrc: "images/slide/Rectangle_53.png",
            name: "john smith",
            position: "CFO of flash.co",
            text1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem quia cupiditate dolorum ipsam? Voluptatem quod eum iure sequi quibusdam.",
            text2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quis dolorem, accusamus distinctio fuga enim eum."
        },
        {
            imgSrc: "images/slide/Rectangle_74.png",
            name: "john smith",
            position: "CFO of flash.co",
            text1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem quia cupiditate dolorum ipsam? Voluptatem quod eum iure sequi quibusdam.",
            text2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quis dolorem, accusamus distinctio fuga enim eum."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % photoContents.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [photoContents.length]);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + photoContents.length) % photoContents.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % photoContents.length);
    };

    return (
        <div className="sectionSeven section">

            <div className="largeTitle">
                <div className="text">Curated for Your Success</div>
                <div className="title">Benefits that Personalize your Trading Experience</div>
            </div>

            {photoContents.map((content, index) => (
                <div className={`photoContent ${index === activeIndex ? 'active' : ''}`} key={index}>
                    <div className="left">
                        <div className="rectangle">
                            <div className="image">
                                <img src={content.imgSrc} alt={content.name} />
                                <div className="name">{content.name}</div>
                                <div className="position">{content.position}</div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p>{content.text1}</p>
                        <p>{content.text2}</p>
                        <div className="pagination">
                            <div className="prev" onClick={handlePrev}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </div>
                            <div className="next" onClick={handleNext}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
