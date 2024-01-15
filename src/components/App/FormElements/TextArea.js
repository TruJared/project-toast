import React from "react";



export default function TextArea({
	label,
	message,
	setMessage,
  id = React.useId(),
  styles,
}) {
	return (
		<>
			<label
				htmlFor={id}
				className={styles.label}
				style={{ alignSelf: "baseline" }}
			>
				{label}
			</label>
			<div className={styles.inputWrapper}>
				<textarea
					id={id}
					className={styles.messageInput}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>
		</>
	);
}
