import React from 'react';

const FAQ = ({faq, index, toggleFAQ}) => {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<h3 className="faq-question">
				{faq.question}
			</h3>
			<div
				className="faq-answer text-justify"
				dangerouslySetInnerHTML={{
					__html: faq.answer
				}}
			>
			</div>
		</div>
	)
}

export default FAQ;
