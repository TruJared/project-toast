import React from "react";

import Button from "../Button";
import TextArea from "../App/FormElements/TextArea";
import Radio from "../App/FormElements/Radio";
import Toast from "../Toast/Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [message, setMessage] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [showToast, setShowToast] = React.useState(true);


	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

      {showToast && <Toast message={message} variant={selectedVariant} show={showToast} setShow={setShowToast } />}
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
              console.log(selectedVariant === v) ||
							<Radio
								key={v}
								label={v}
								name="variant"
                value={v}
                checked = {selectedVariant === v}
                onChange={() =>
                  setSelectedVariant(v)}
							/>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={()=>setShowToast(!showToast) }>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
