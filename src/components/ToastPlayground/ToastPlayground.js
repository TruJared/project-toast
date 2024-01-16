import React from "react";

import Button from "../Button";
import TextArea from "../App/FormElements/TextArea";
import Radio from "../App/FormElements/Radio";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [message, setMessage] = React.useState("");
	const [selectedVariant, setSelectedVariant] = React.useState(
		VARIANT_OPTIONS[0]
	);
	const [showToast, setShowToast] = React.useState(false);

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf
				message={message}
				variant={selectedVariant}
				show={showToast}
				setMessage={setMessage}
				setSelectedVariant={setSelectedVariant}
				setShowToast={setShowToast}
				variants={VARIANT_OPTIONS}
			/>

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<TextArea
						label="Message"
						message={message}
						setMessage={setMessage}
						styles={styles}
					/>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((v) => (
							<Radio
								key={v}
								label={v}
								name="variant"
								value={v}
								checked={selectedVariant === v}
								onChange={() => setSelectedVariant(v)}
							/>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button onClick={() => setShowToast(true)}>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
