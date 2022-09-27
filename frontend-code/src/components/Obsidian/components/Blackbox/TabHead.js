import styles from './css/tab.module.css';
import { Link } from 'react-router-dom';
export const inip = 'Input Here';
export const inop = 'Output Here';


const validId = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const TabHead = ({ idTab }) => {
	return (
		<div className={styles.mainBtn}>
			{validId.map((item) => (
				<div className={styles.btn}>
					{idTab === item ? (
						<div class={`btn white-text dark disabled ${styles.btnDec}`}>
							Q{item}
						</div>
					) : (
						<Link
							to={`/obsidian/${item}`}
							class={`btn white-text dark ${styles.btnIn}`}
						>
							Q{item}
						</Link>
					)}
				</div>
			))}
		</div>
	);
};

export default TabHead;
