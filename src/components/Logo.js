import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledLogo = styled.svg`
	display: flex;
`;

const Logo = (props) => {
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log("mounted");
	}, []);

	return (
		<StyledLogo
				className={props.className}
				width="290"
				height="51"
				viewBox="0 0 290 51"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14.824 48C14.3547 48 14.056 47.7867 13.928 47.36L2.6 4.032L2.536 3.776C2.536 3.392 2.77067 3.2 3.24 3.2H11.176C11.6027 3.2 11.88 3.41333 12.008 3.84L18.088 29.888C18.1307 30.0587 18.1947 30.144 18.28 30.144C18.3653 30.144 18.4293 30.0587 18.472 29.888L24.36 3.904C24.488 3.43466 24.7653 3.2 25.192 3.2H32.936C33.4053 3.2 33.704 3.41333 33.832 3.84L40.232 29.888C40.2747 30.016 40.3387 30.1013 40.424 30.144C40.5093 30.144 40.5733 30.0587 40.616 29.888L46.504 3.904C46.632 3.43466 46.9093 3.2 47.336 3.2H54.888C55.4853 3.2 55.72 3.47733 55.592 4.032L45.096 47.36C44.968 47.7867 44.6693 48 44.2 48H36.584C36.1573 48 35.88 47.7867 35.752 47.36L29.224 19.648C29.1813 19.4773 29.1173 19.392 29.032 19.392C28.9467 19.392 28.8827 19.4773 28.84 19.648L22.76 47.296C22.6747 47.7653 22.3973 48 21.928 48H14.824ZM74.84 48.704C71.512 48.704 68.568 48.0213 66.008 46.656C63.4907 45.2907 61.528 43.392 60.12 40.96C58.712 38.4853 58.008 35.648 58.008 32.448V18.752C58.008 15.5947 58.712 12.8 60.12 10.368C61.528 7.936 63.4907 6.05866 66.008 4.736C68.568 3.37067 71.512 2.688 74.84 2.688C78.2107 2.688 81.1547 3.37067 83.672 4.736C86.232 6.05866 88.216 7.936 89.624 10.368C91.032 12.8 91.736 15.5947 91.736 18.752V32.448C91.736 35.648 91.032 38.4853 89.624 40.96C88.216 43.4347 86.232 45.3547 83.672 46.72C81.1547 48.0427 78.2107 48.704 74.84 48.704ZM74.84 40.96C77.1867 40.96 79.0853 40.2133 80.536 38.72C81.9867 37.2267 82.712 35.2427 82.712 32.768V18.688C82.712 16.2133 81.9867 14.2293 80.536 12.736C79.128 11.2 77.2293 10.432 74.84 10.432C72.4933 10.432 70.5947 11.2 69.144 12.736C67.736 14.2293 67.032 16.2133 67.032 18.688V32.768C67.032 35.2427 67.736 37.2267 69.144 38.72C70.5947 40.2133 72.4933 40.96 74.84 40.96ZM123.23 48C122.803 48 122.505 47.808 122.334 47.424L114.334 29.696C114.249 29.5253 114.121 29.44 113.95 29.44H107.998C107.785 29.44 107.678 29.5467 107.678 29.76V47.232C107.678 47.4453 107.593 47.6373 107.422 47.808C107.294 47.936 107.123 48 106.91 48H99.422C99.2087 48 99.0167 47.936 98.846 47.808C98.718 47.6373 98.654 47.4453 98.654 47.232V3.968C98.654 3.75467 98.718 3.584 98.846 3.456C99.0167 3.28533 99.2087 3.2 99.422 3.2H117.726C120.457 3.2 122.846 3.75466 124.894 4.864C126.985 5.97333 128.585 7.552 129.694 9.6C130.846 11.648 131.422 14.016 131.422 16.704C131.422 19.6053 130.697 22.1013 129.246 24.192C127.795 26.24 125.769 27.6907 123.166 28.544C122.953 28.6293 122.889 28.7787 122.974 28.992L131.678 47.104C131.763 47.2747 131.806 47.4027 131.806 47.488C131.806 47.8293 131.571 48 131.102 48H123.23ZM107.998 10.944C107.785 10.944 107.678 11.0507 107.678 11.264V22.208C107.678 22.4213 107.785 22.528 107.998 22.528H116.382C118.174 22.528 119.625 21.9947 120.734 20.928C121.886 19.8613 122.462 18.4747 122.462 16.768C122.462 15.0613 121.886 13.6747 120.734 12.608C119.625 11.4987 118.174 10.944 116.382 10.944H107.998ZM138.735 48C138.521 48 138.329 47.936 138.159 47.808C138.031 47.6373 137.967 47.4453 137.967 47.232V3.968C137.967 3.75467 138.031 3.584 138.159 3.456C138.329 3.28533 138.521 3.2 138.735 3.2H146.223C146.436 3.2 146.607 3.28533 146.735 3.456C146.905 3.584 146.991 3.75467 146.991 3.968V21.888C146.991 22.016 147.033 22.1013 147.119 22.144C147.204 22.144 147.289 22.1013 147.375 22.016L162.159 3.648C162.415 3.34933 162.735 3.2 163.119 3.2H171.567C171.908 3.2 172.121 3.30666 172.207 3.52C172.292 3.69066 172.249 3.904 172.079 4.16L157.807 22.4C157.679 22.5707 157.657 22.72 157.743 22.848L172.847 47.104C172.932 47.36 172.975 47.5093 172.975 47.552C172.975 47.8507 172.761 48 172.335 48H163.887C163.46 48 163.161 47.8293 162.991 47.488L151.599 29.056C151.556 28.9707 151.492 28.928 151.407 28.928C151.321 28.928 151.236 28.9707 151.151 29.056L147.119 34.112C147.033 34.2827 146.991 34.4107 146.991 34.496V47.232C146.991 47.4453 146.905 47.6373 146.735 47.808C146.607 47.936 146.436 48 146.223 48H138.735ZM192.09 48.704C188.762 48.704 185.818 48.0213 183.258 46.656C180.741 45.2907 178.778 43.392 177.37 40.96C175.962 38.4853 175.258 35.648 175.258 32.448V18.752C175.258 15.5947 175.962 12.8 177.37 10.368C178.778 7.936 180.741 6.05866 183.258 4.736C185.818 3.37067 188.762 2.688 192.09 2.688C195.461 2.688 198.405 3.37067 200.922 4.736C203.482 6.05866 205.466 7.936 206.874 10.368C208.282 12.8 208.986 15.5947 208.986 18.752V32.448C208.986 35.648 208.282 38.4853 206.874 40.96C205.466 43.4347 203.482 45.3547 200.922 46.72C198.405 48.0427 195.461 48.704 192.09 48.704ZM192.09 40.96C194.437 40.96 196.335 40.2133 197.786 38.72C199.237 37.2267 199.962 35.2427 199.962 32.768V18.688C199.962 16.2133 199.237 14.2293 197.786 12.736C196.378 11.2 194.479 10.432 192.09 10.432C189.743 10.432 187.845 11.2 186.394 12.736C184.986 14.2293 184.282 16.2133 184.282 18.688V32.768C184.282 35.2427 184.986 37.2267 186.394 38.72C187.845 40.2133 189.743 40.96 192.09 40.96ZM232.16 48.512C228.875 48.512 225.973 47.872 223.456 46.592C220.981 45.312 219.04 43.52 217.632 41.216C216.267 38.8693 215.584 36.1813 215.584 33.152V3.968C215.584 3.75467 215.648 3.584 215.776 3.456C215.947 3.28533 216.139 3.2 216.352 3.2H223.84C224.053 3.2 224.224 3.28533 224.352 3.456C224.523 3.584 224.608 3.75467 224.608 3.968V33.216C224.608 35.4773 225.291 37.312 226.656 38.72C228.064 40.0853 229.899 40.768 232.16 40.768C234.421 40.768 236.235 40.0853 237.6 38.72C239.008 37.312 239.712 35.4773 239.712 33.216V3.968C239.712 3.75467 239.776 3.584 239.904 3.456C240.075 3.28533 240.267 3.2 240.48 3.2H247.968C248.181 3.2 248.352 3.28533 248.48 3.456C248.651 3.584 248.736 3.75467 248.736 3.968V33.152C248.736 36.1813 248.032 38.8693 246.624 41.216C245.259 43.52 243.317 45.312 240.8 46.592C238.325 47.872 235.445 48.512 232.16 48.512ZM287.066 3.2C287.279 3.2 287.45 3.28533 287.578 3.456C287.749 3.584 287.834 3.75467 287.834 3.968V10.24C287.834 10.4533 287.749 10.6453 287.578 10.816C287.45 10.944 287.279 11.008 287.066 11.008H275.61C275.397 11.008 275.29 11.1147 275.29 11.328V47.232C275.29 47.4453 275.205 47.6373 275.034 47.808C274.906 47.936 274.735 48 274.522 48H267.034C266.821 48 266.629 47.936 266.458 47.808C266.33 47.6373 266.266 47.4453 266.266 47.232V11.328C266.266 11.1147 266.159 11.008 265.946 11.008H254.81C254.597 11.008 254.405 10.944 254.234 10.816C254.106 10.6453 254.042 10.4533 254.042 10.24V3.968C254.042 3.75467 254.106 3.584 254.234 3.456C254.405 3.28533 254.597 3.2 254.81 3.2H287.066Z"
					fill="white"
				/>
				<path
					d="M13.928 47.36L11.993 47.8659L12.0021 47.9005L12.0123 47.9347L13.928 47.36ZM2.6 4.032L0.659715 4.51707L0.662321 4.52749L0.665039 4.53789L2.6 4.032ZM2.536 3.776H0.536V4.02221L0.595715 4.26107L2.536 3.776ZM12.008 3.84L13.9556 3.38539L13.9415 3.32485L13.9237 3.2653L12.008 3.84ZM18.088 29.888L16.1404 30.3426L16.1439 30.3579L16.1477 30.3731L18.088 29.888ZM18.472 29.888L20.4123 30.3731L20.4177 30.3516L20.4225 30.33L18.472 29.888ZM24.36 3.904L22.4305 3.37776L22.419 3.41965L22.4095 3.462L24.36 3.904ZM33.832 3.84L35.7742 3.36279L35.7622 3.31371L35.7477 3.26531L33.832 3.84ZM40.232 29.888L38.2898 30.3652L38.3091 30.4437L38.3346 30.5204L40.232 29.888ZM40.424 30.144L39.5296 31.9329L39.9519 32.144H40.424V30.144ZM40.616 29.888L42.5563 30.3731L42.5617 30.3516L42.5665 30.33L40.616 29.888ZM46.504 3.904L44.5745 3.37776L44.563 3.41965L44.5535 3.462L46.504 3.904ZM55.592 4.032L57.5358 4.50287L57.5383 4.49231L57.5408 4.48172L55.592 4.032ZM45.096 47.36L47.0117 47.9347L47.0271 47.8832L47.0398 47.8309L45.096 47.36ZM35.752 47.36L33.8053 47.8186L33.8191 47.8771L33.8363 47.9347L35.752 47.36ZM29.224 19.648L31.1707 19.1894L31.1676 19.1762L31.1643 19.1629L29.224 19.648ZM28.84 19.648L26.8997 19.1629L26.8928 19.1906L26.8867 19.2184L28.84 19.648ZM22.76 47.296L20.8067 46.8664L20.7988 46.9022L20.7923 46.9382L22.76 47.296ZM14.824 46C14.8898 46 15.1368 46.0171 15.4105 46.2125C15.694 46.415 15.8082 46.6673 15.8437 46.7853L12.0123 47.9347C12.1758 48.4794 12.5034 49.0516 13.0855 49.4675C13.6579 49.8763 14.2889 50 14.824 50V46ZM15.863 46.8541L4.53496 3.52611L0.665039 4.53789L11.993 47.8659L15.863 46.8541ZM4.54029 3.54693L4.47629 3.29093L0.595715 4.26107L0.659715 4.51707L4.54029 3.54693ZM4.536 3.776C4.536 4.01006 4.445 4.51021 3.97848 4.89191C3.78037 5.05399 3.58698 5.13041 3.45824 5.16552C3.33393 5.19943 3.25249 5.2 3.24 5.2V1.2C2.78363 1.2 2.0699 1.28523 1.44552 1.79608C0.744332 2.36979 0.536 3.15793 0.536 3.776H4.536ZM3.24 5.2H11.176V1.2H3.24V5.2ZM11.176 5.2C11.0476 5.2 10.7669 5.16238 10.4846 4.94525C10.2102 4.7342 10.1158 4.49275 10.0923 4.41469L13.9237 3.2653C13.7722 2.76057 13.4751 2.19912 12.9234 1.77475C12.3638 1.34428 11.7311 1.2 11.176 1.2V5.2ZM10.0604 4.29461L16.1404 30.3426L20.0356 29.4334L13.9556 3.38539L10.0604 4.29461ZM16.1477 30.3731C16.1971 30.5706 16.3053 30.9297 16.568 31.28C16.873 31.6866 17.4516 32.144 18.28 32.144V28.144C19.023 28.144 19.527 28.5587 19.768 28.88C19.9667 29.145 20.0216 29.3761 20.0283 29.4029L16.1477 30.3731ZM18.28 32.144C19.1084 32.144 19.687 31.6866 19.992 31.28C20.2547 30.9297 20.3629 30.5706 20.4123 30.3731L16.5317 29.4029C16.5384 29.3761 16.5933 29.145 16.792 28.88C17.033 28.5587 17.537 28.144 18.28 28.144V32.144ZM20.4225 30.33L26.3105 4.346L22.4095 3.462L16.5215 29.446L20.4225 30.33ZM26.2895 4.43024C26.2825 4.45595 26.215 4.68352 25.9559 4.90277C25.6723 5.14272 25.3649 5.2 25.192 5.2V1.2C24.5924 1.2 23.933 1.37461 23.3721 1.84923C22.8357 2.30315 22.5655 2.88271 22.4305 3.37776L26.2895 4.43024ZM25.192 5.2H32.936V1.2H25.192V5.2ZM32.936 5.2C32.8702 5.2 32.6232 5.18294 32.3495 4.98746C32.066 4.78496 31.9518 4.53271 31.9163 4.41469L35.7477 3.26531C35.5843 2.72062 35.2566 2.14837 34.6745 1.73253C34.1021 1.32372 33.4711 1.2 32.936 1.2V5.2ZM31.8898 4.3172L38.2898 30.3652L42.1742 29.4108L35.7742 3.36279L31.8898 4.3172ZM38.3346 30.5204C38.4748 30.9409 38.8025 31.5693 39.5296 31.9329L41.3184 28.3551C41.8749 28.6333 42.0745 29.0911 42.1294 29.2556L38.3346 30.5204ZM40.424 32.144C41.2524 32.144 41.831 31.6866 42.136 31.28C42.3987 30.9297 42.5069 30.5706 42.5563 30.3731L38.6757 29.4029C38.6824 29.3761 38.7373 29.145 38.936 28.88C39.177 28.5587 39.6809 28.144 40.424 28.144V32.144ZM42.5665 30.33L48.4546 4.346L44.5535 3.462L38.6655 29.446L42.5665 30.33ZM48.4335 4.43024C48.4265 4.45595 48.359 4.68352 48.0999 4.90277C47.8163 5.14272 47.5089 5.2 47.336 5.2V1.2C46.7364 1.2 46.077 1.37461 45.5161 1.84923C44.9797 2.30315 44.7095 2.88271 44.5745 3.37776L48.4335 4.43024ZM47.336 5.2H54.888V1.2H47.336V5.2ZM54.888 5.2C54.8866 5.2 54.8638 5.2 54.8238 5.19453C54.7841 5.18909 54.7186 5.17704 54.6355 5.14936C54.4639 5.09214 54.2083 4.96355 53.9852 4.69988C53.758 4.43132 53.6642 4.14049 53.6362 3.92232C53.6108 3.72406 53.6397 3.59735 53.6432 3.58228L57.5408 4.48172C57.6647 3.94467 57.7521 2.95918 57.0388 2.11611C56.3541 1.30698 55.4048 1.2 54.888 1.2V5.2ZM53.6482 3.56113L43.1522 46.8891L47.0398 47.8309L57.5358 4.50287L53.6482 3.56113ZM43.1803 46.7853C43.2158 46.6673 43.33 46.415 43.6135 46.2125C43.8872 46.0171 44.1342 46 44.2 46V50C44.7351 50 45.3661 49.8763 45.9385 49.4675C46.5206 49.0516 46.8483 48.4794 47.0117 47.9347L43.1803 46.7853ZM44.2 46H36.584V50H44.2V46ZM36.584 46C36.7124 46 36.9931 46.0376 37.2754 46.2548C37.5498 46.4658 37.6442 46.7072 37.6677 46.7853L33.8363 47.9347C33.9878 48.4394 34.2849 49.0009 34.8366 49.4252C35.3962 49.8557 36.0289 50 36.584 50V46ZM37.6987 46.9014L31.1707 19.1894L27.2773 20.1066L33.8053 47.8186L37.6987 46.9014ZM31.1643 19.1629C31.1149 18.9654 31.0067 18.6063 30.744 18.256C30.439 17.8494 29.8604 17.392 29.032 17.392V21.392C28.289 21.392 27.785 20.9773 27.544 20.656C27.3453 20.391 27.2904 20.1599 27.2837 20.1331L31.1643 19.1629ZM29.032 17.392C28.2036 17.392 27.625 17.8494 27.32 18.256C27.0573 18.6063 26.9491 18.9654 26.8997 19.1629L30.7803 20.1331C30.7736 20.1599 30.7187 20.391 30.52 20.656C30.279 20.9773 29.775 21.392 29.032 21.392V17.392ZM26.8867 19.2184L20.8067 46.8664L24.7133 47.7256L30.7933 20.0775L26.8867 19.2184ZM20.7923 46.9382C20.8063 46.8609 20.883 46.5621 21.1961 46.2972C21.5132 46.029 21.8304 46 21.928 46V50C22.4949 50 23.1855 49.8537 23.7799 49.3508C24.3703 48.8512 24.6284 48.2004 24.7277 47.6538L20.7923 46.9382ZM21.928 46H14.824V50H21.928V46ZM66.008 46.656L65.0545 48.4141L65.0668 48.4207L66.008 46.656ZM60.12 40.96L58.3817 41.949L58.3854 41.9556L58.3891 41.9621L60.12 40.96ZM60.12 10.368L61.8509 11.3701L61.8509 11.3701L60.12 10.368ZM66.008 4.736L66.9383 6.50652L66.9492 6.5007L66.008 4.736ZM83.672 4.736L82.7185 6.49406L82.7361 6.50363L82.754 6.51285L83.672 4.736ZM89.624 10.368L87.8931 11.3701L87.8931 11.3701L89.624 10.368ZM83.672 46.72L84.6023 48.4905L84.6132 48.4847L83.672 46.72ZM80.536 38.72L79.1014 37.3264L79.1014 37.3264L80.536 38.72ZM80.536 12.736L79.0617 14.0874L79.0813 14.1088L79.1014 14.1296L80.536 12.736ZM69.144 12.736L67.69 11.3628L67.6888 11.364L69.144 12.736ZM69.144 38.72L67.6888 40.092L67.6991 40.1029L67.7094 40.1136L69.144 38.72ZM74.84 46.704C71.7916 46.704 69.1794 46.0808 66.9492 44.8913L65.0668 48.4207C67.9566 49.9619 71.2324 50.704 74.84 50.704V46.704ZM66.9615 44.8979C64.7615 43.7047 63.0706 42.0648 61.8509 39.9579L58.3891 41.9621C59.9854 44.7192 62.2199 46.8766 65.0545 48.4141L66.9615 44.8979ZM61.8583 39.971C60.6423 37.8336 60.008 35.345 60.008 32.448H56.008C56.008 35.951 56.7817 39.137 58.3817 41.949L61.8583 39.971ZM60.008 32.448V18.752H56.008V32.448H60.008ZM60.008 18.752C60.008 15.9022 60.6401 13.4613 61.8509 11.3701L58.3891 9.36593C56.7839 12.1387 56.008 15.2872 56.008 18.752H60.008ZM61.8509 11.3701C63.0674 9.26869 64.7507 7.65587 66.9383 6.50648L65.0777 2.96551C62.2306 4.46146 59.9886 6.6033 58.3891 9.36593L61.8509 11.3701ZM66.9492 6.5007C69.1794 5.31124 71.7916 4.688 74.84 4.688V0.688C71.2324 0.688 67.9566 1.43009 65.0668 2.97129L66.9492 6.5007ZM74.84 4.688C77.9367 4.688 80.5417 5.31346 82.7185 6.49406L84.6255 2.97793C81.7676 1.42787 78.4846 0.688 74.84 0.688V4.688ZM82.754 6.51285C84.9837 7.66488 86.6816 9.27741 87.8931 11.3701L91.3549 9.36593C89.7504 6.59459 87.4803 4.45245 84.59 2.95914L82.754 6.51285ZM87.8931 11.3701C89.1039 13.4613 89.736 15.9022 89.736 18.752H93.736C93.736 15.2872 92.9601 12.1387 91.3549 9.36593L87.8931 11.3701ZM89.736 18.752V32.448H93.736V18.752H89.736ZM89.736 32.448C89.736 35.345 89.1017 37.8336 87.8857 39.971L91.3623 41.949C92.9623 39.137 93.736 35.951 93.736 32.448H89.736ZM87.8857 39.971C86.6684 42.1103 84.9638 43.7644 82.7308 44.9553L84.6132 48.4847C87.5002 46.945 89.7636 44.759 91.3623 41.949L87.8857 39.971ZM82.7417 44.9495C80.56 46.0958 77.9465 46.704 74.84 46.704V50.704C78.4749 50.704 81.7493 49.9895 84.6023 48.4905L82.7417 44.9495ZM74.84 42.96C77.6518 42.96 80.0939 42.0455 81.9706 40.1136L79.1014 37.3264C78.0768 38.3812 76.7215 38.96 74.84 38.96V42.96ZM81.9706 40.1136C83.8509 38.1779 84.712 35.6582 84.712 32.768H80.712C80.712 34.8272 80.1224 36.2754 79.1014 37.3264L81.9706 40.1136ZM84.712 32.768V18.688H80.712V32.768H84.712ZM84.712 18.688C84.712 15.7978 83.8509 13.2781 81.9706 11.3424L79.1014 14.1296C80.1224 15.1806 80.712 16.6288 80.712 18.688H84.712ZM82.0103 11.3846C80.1664 9.37297 77.6994 8.432 74.84 8.432V12.432C76.7592 12.432 78.0896 13.027 79.0617 14.0874L82.0103 11.3846ZM74.84 8.432C72.0104 8.432 69.5623 9.38024 67.69 11.3628L70.598 14.1092C71.627 13.0198 72.9762 12.432 74.84 12.432V8.432ZM67.6888 11.364C65.8614 13.3021 65.032 15.8144 65.032 18.688H69.032C69.032 16.6123 69.6106 15.1566 70.5992 14.108L67.6888 11.364ZM65.032 18.688V32.768H69.032V18.688H65.032ZM65.032 32.768C65.032 35.6416 65.8614 38.1539 67.6888 40.092L70.5992 37.348C69.6106 36.2994 69.032 34.8437 69.032 32.768H65.032ZM67.7094 40.1136C69.5861 42.0455 72.0282 42.96 74.84 42.96V38.96C72.9585 38.96 71.6032 38.3812 70.5786 37.3264L67.7094 40.1136ZM122.334 47.424L124.162 46.6117L124.157 46.6014L122.334 47.424ZM114.334 29.696L116.157 28.8734L116.141 28.8371L116.123 28.8016L114.334 29.696ZM107.422 47.808L108.836 49.2222L108.836 49.2222L107.422 47.808ZM98.846 47.808L97.246 49.008L97.4174 49.2366L97.646 49.408L98.846 47.808ZM98.846 3.456L97.4318 2.04179L97.4318 2.04179L98.846 3.456ZM124.894 4.864L123.941 6.62258L123.949 6.62667L123.957 6.6307L124.894 4.864ZM129.694 9.6L127.935 10.5526L127.943 10.5666L127.951 10.5805L129.694 9.6ZM129.246 24.192L130.878 25.348L130.884 25.3401L130.889 25.3322L129.246 24.192ZM123.166 28.544L122.543 26.6435L122.482 26.6634L122.423 26.687L123.166 28.544ZM122.974 28.992L121.117 29.7348L121.142 29.7975L121.171 29.8583L122.974 28.992ZM131.678 47.104L129.875 47.9703L129.882 47.9844L129.889 47.9984L131.678 47.104ZM120.734 20.928L119.375 19.4605L119.361 19.4733L119.348 19.4863L120.734 20.928ZM120.734 12.608L119.32 14.0222L119.347 14.0494L119.375 14.0755L120.734 12.608ZM123.23 46C123.322 46 123.534 46.0237 123.768 46.1736C124.003 46.3249 124.118 46.5137 124.162 46.6117L120.506 48.2363C120.721 48.7183 121.071 49.1951 121.604 49.5384C122.136 49.8803 122.711 50 123.23 50V46ZM124.157 46.6014L116.157 28.8734L112.511 30.5186L120.511 48.2466L124.157 46.6014ZM116.123 28.8016C115.962 28.479 115.699 28.1169 115.283 27.8399C114.855 27.5546 114.385 27.44 113.95 27.44V31.44C113.685 31.44 113.365 31.3681 113.065 31.1681C112.777 30.9765 112.621 30.7424 112.545 30.5904L116.123 28.8016ZM113.95 27.44H107.998V31.44H113.95V27.44ZM107.998 27.44C107.583 27.44 106.904 27.5451 106.344 28.1058C105.783 28.6665 105.678 29.345 105.678 29.76H109.678C109.678 29.9616 109.626 30.4802 109.172 30.9342C108.718 31.3882 108.2 31.44 107.998 31.44V27.44ZM105.678 29.76V47.232H109.678V29.76H105.678ZM105.678 47.232C105.678 47.0633 105.714 46.8875 105.786 46.7237C105.857 46.5647 105.945 46.4565 106.008 46.3938L108.836 49.2222C109.328 48.7302 109.678 48.0472 109.678 47.232H105.678ZM106.008 46.3938C106.147 46.2545 106.316 46.1469 106.496 46.0793C106.67 46.0141 106.817 46 106.91 46V50C107.552 50 108.267 49.7917 108.836 49.2222L106.008 46.3938ZM106.91 46H99.422V50H106.91V46ZM99.422 46C99.5186 46 99.6317 46.0151 99.7505 46.0546C99.8692 46.0942 99.9687 46.15 100.046 46.208L97.646 49.408C98.1629 49.7956 98.7759 50 99.422 50V46ZM100.446 46.608C100.504 46.6853 100.56 46.7848 100.599 46.9035C100.639 47.0223 100.654 47.1354 100.654 47.232H96.654C96.654 47.8781 96.8584 48.4911 97.246 49.008L100.446 46.608ZM100.654 47.232V3.968H96.654V47.232H100.654ZM100.654 3.968C100.654 4.06106 100.64 4.20832 100.575 4.38224C100.507 4.56232 100.4 4.73089 100.26 4.87021L97.4318 2.04179C96.8623 2.61126 96.654 3.32615 96.654 3.968H100.654ZM100.26 4.87021C100.197 4.93295 100.089 5.02092 99.9303 5.09162C99.7665 5.16439 99.5907 5.2 99.422 5.2V1.2C98.6068 1.2 97.9238 1.54974 97.4318 2.04179L100.26 4.87021ZM99.422 5.2H117.726V1.2H99.422V5.2ZM117.726 5.2C120.182 5.2 122.233 5.69699 123.941 6.62258L125.847 3.10541C123.459 1.81234 120.732 1.2 117.726 1.2V5.2ZM123.957 6.6307C125.705 7.5586 127.017 8.85678 127.935 10.5526L131.453 8.64743C130.152 6.24722 128.264 4.38807 125.831 3.0973L123.957 6.6307ZM127.951 10.5805C128.911 12.2883 129.422 14.3094 129.422 16.704H133.422C133.422 13.7226 132.781 11.0077 131.437 8.61948L127.951 10.5805ZM129.422 16.704C129.422 19.2569 128.79 21.3415 127.603 23.0518L130.889 25.3322C132.604 22.8612 133.422 19.9537 133.422 16.704H129.422ZM127.614 23.036C126.434 24.7018 124.777 25.9109 122.543 26.6435L123.789 30.4445C126.76 29.4704 129.157 27.7782 130.878 25.348L127.614 23.036ZM122.423 26.687C122.03 26.8442 121.434 27.198 121.12 27.9322C120.805 28.6663 120.96 29.3419 121.117 29.7348L124.831 28.2492C124.903 28.4288 125.047 28.923 124.796 29.5078C124.546 30.0927 124.088 30.3291 123.909 30.401L122.423 26.687ZM121.171 29.8583L129.875 47.9703L133.481 46.2377L124.777 28.1257L121.171 29.8583ZM129.889 47.9984C129.905 48.0308 129.895 48.0145 129.877 47.9605C129.867 47.9316 129.851 47.8795 129.837 47.8082C129.823 47.7391 129.806 47.6285 129.806 47.488H133.806C133.806 46.893 133.56 46.3959 133.467 46.2096L129.889 47.9984ZM129.806 47.488C129.806 47.3456 129.831 47.1256 129.944 46.8787C130.062 46.6208 130.243 46.4074 130.454 46.2545C130.652 46.1104 130.834 46.0498 130.939 46.0243C130.993 46.0112 131.035 46.0054 131.06 46.0027C131.086 46 131.101 46 131.102 46V50C131.52 50 132.194 49.9347 132.806 49.4895C133.537 48.9582 133.806 48.1702 133.806 47.488H129.806ZM131.102 46H123.23V50H131.102V46ZM107.998 8.944C107.583 8.944 106.904 9.04909 106.344 9.60979C105.783 10.1705 105.678 10.849 105.678 11.264H109.678C109.678 11.4656 109.626 11.9842 109.172 12.4382C108.718 12.8922 108.2 12.944 107.998 12.944V8.944ZM105.678 11.264V22.208H109.678V11.264H105.678ZM105.678 22.208C105.678 22.623 105.783 23.3015 106.344 23.8622C106.904 24.4229 107.583 24.528 107.998 24.528V20.528C108.2 20.528 108.718 20.5798 109.172 21.0338C109.626 21.4878 109.678 22.0064 109.678 22.208H105.678ZM107.998 24.528H116.382V20.528H107.998V24.528ZM116.382 24.528C118.6 24.528 120.577 23.8532 122.12 22.3697L119.348 19.4863C118.672 20.1361 117.748 20.528 116.382 20.528V24.528ZM122.093 22.3955C123.692 20.9151 124.462 18.9777 124.462 16.768H120.462C120.462 17.9717 120.08 18.8076 119.375 19.4605L122.093 22.3955ZM124.462 16.768C124.462 14.5583 123.692 12.6209 122.093 11.1405L119.375 14.0755C120.08 14.7284 120.462 15.5643 120.462 16.768H124.462ZM122.148 11.1938C120.61 9.65513 118.622 8.944 116.382 8.944V12.944C117.726 12.944 118.64 13.3422 119.32 14.0222L122.148 11.1938ZM116.382 8.944H107.998V12.944H116.382V8.944ZM138.159 47.808L136.558 49.008L136.73 49.2366L136.959 49.408L138.159 47.808ZM138.159 3.456L136.744 2.04179L136.744 2.04179L138.159 3.456ZM146.735 3.456L145.135 4.656L145.306 4.88457L145.534 5.05599L146.735 3.456ZM147.119 22.144L146.224 23.9328L146.646 24.144H147.119V22.144ZM147.375 22.016L148.789 23.4302L148.865 23.354L148.933 23.27L147.375 22.016ZM162.159 3.648L160.64 2.34642L160.62 2.36989L160.6 2.39398L162.159 3.648ZM172.207 3.52L170.35 4.26277L170.38 4.34002L170.418 4.41443L172.207 3.52ZM172.079 4.16L173.654 5.39246L173.7 5.33262L173.743 5.2694L172.079 4.16ZM157.807 22.4L156.231 21.1675L156.219 21.1836L156.207 21.2L157.807 22.4ZM157.743 22.848L159.44 21.7908L159.424 21.7645L159.407 21.7386L157.743 22.848ZM172.847 47.104L174.744 46.4715L174.669 46.2474L174.544 46.0468L172.847 47.104ZM162.991 47.488L164.779 46.5936L164.739 46.5131L164.692 46.4365L162.991 47.488ZM151.599 29.056L149.81 29.9504L149.85 30.0309L149.897 30.1075L151.599 29.056ZM151.151 29.056L149.736 27.6418L149.657 27.7212L149.587 27.809L151.151 29.056ZM147.119 34.112L145.555 32.865L145.424 33.0295L145.33 33.2176L147.119 34.112ZM146.735 47.808L148.149 49.2222L148.149 49.2222L146.735 47.808ZM138.735 46C138.831 46 138.944 46.0151 139.063 46.0546C139.182 46.0942 139.281 46.15 139.359 46.208L136.959 49.408C137.475 49.7956 138.088 50 138.735 50V46ZM139.759 46.608C139.816 46.6853 139.872 46.7848 139.912 46.9035C139.951 47.0223 139.967 47.1354 139.967 47.232H135.967C135.967 47.8781 136.171 48.4911 136.558 49.008L139.759 46.608ZM139.967 47.232V3.968H135.967V47.232H139.967ZM139.967 3.968C139.967 4.06106 139.952 4.20832 139.887 4.38224C139.82 4.56232 139.712 4.73089 139.573 4.87021L136.744 2.04179C136.175 2.61126 135.967 3.32615 135.967 3.968H139.967ZM139.573 4.87021C139.51 4.93295 139.402 5.02092 139.243 5.09162C139.079 5.16439 138.903 5.2 138.735 5.2V1.2C137.919 1.2 137.236 1.54974 136.744 2.04179L139.573 4.87021ZM138.735 5.2H146.223V1.2H138.735V5.2ZM146.223 5.2C146.056 5.2 145.84 5.16471 145.616 5.05285C145.392 4.94099 145.235 4.78942 145.135 4.656L148.335 2.256C147.829 1.58172 147.065 1.2 146.223 1.2V5.2ZM145.534 5.05599C145.401 4.95593 145.25 4.79814 145.138 4.57442C145.026 4.35071 144.991 4.13477 144.991 3.968H148.991C148.991 3.12515 148.609 2.36171 147.935 1.856L145.534 5.05599ZM144.991 3.968V21.888H148.991V3.968H144.991ZM144.991 21.888C144.991 22.4715 145.228 23.4347 146.224 23.9328L148.013 20.3552C148.357 20.5273 148.639 20.8092 148.811 21.1536C148.968 21.4668 148.991 21.7427 148.991 21.888H144.991ZM147.119 24.144C147.921 24.144 148.485 23.7335 148.789 23.4302L145.96 20.6018C146.093 20.4691 146.486 20.144 147.119 20.144V24.144ZM148.933 23.27L163.717 4.90202L160.6 2.39398L145.816 20.762L148.933 23.27ZM163.677 4.94958C163.641 4.99169 163.562 5.06553 163.436 5.12436C163.309 5.18379 163.193 5.2 163.119 5.2V1.2C162.134 1.2 161.265 1.61688 160.64 2.34642L163.677 4.94958ZM163.119 5.2H171.567V1.2H163.119V5.2ZM171.567 5.2C171.551 5.2 171.353 5.20108 171.088 5.06885C170.775 4.91227 170.496 4.62954 170.35 4.26277L174.063 2.77722C173.533 1.45064 172.262 1.2 171.567 1.2V5.2ZM170.418 4.41443C170.234 4.04717 170.224 3.68108 170.277 3.41577C170.324 3.1836 170.41 3.05665 170.414 3.05059L173.743 5.2694C174.054 4.8024 174.566 3.76655 173.995 2.62556L170.418 4.41443ZM170.503 2.92753L156.231 21.1675L159.382 23.6325L173.654 5.39246L170.503 2.92753ZM156.207 21.2C156.02 21.4493 155.788 21.8403 155.715 22.3572C155.633 22.9295 155.769 23.4929 156.078 23.9574L159.407 21.7386C159.631 22.0751 159.735 22.4999 159.674 22.9228C159.622 23.2904 159.465 23.5214 159.406 23.6L156.207 21.2ZM156.045 23.9052L171.149 48.1612L174.544 46.0468L159.44 21.7908L156.045 23.9052ZM170.949 47.7365C170.988 47.8538 171.01 47.9236 171.019 47.9575C171.025 47.9757 171.021 47.9642 171.014 47.9339C171.011 47.9185 171.003 47.8833 170.996 47.8351C170.992 47.8103 170.987 47.7751 170.983 47.7324C170.979 47.6914 170.975 47.6289 170.975 47.552H174.975C174.975 47.3022 174.926 47.0968 174.919 47.0661C174.901 46.9878 174.882 46.915 174.866 46.8585C174.833 46.743 174.79 46.6102 174.744 46.4715L170.949 47.7365ZM170.975 47.552C170.975 47.3889 171.004 47.1499 171.129 46.8881C171.258 46.6163 171.452 46.4002 171.668 46.2495C171.87 46.1078 172.054 46.049 172.16 46.0243C172.266 45.9997 172.331 46 172.335 46V50C172.72 50 173.365 49.9437 173.961 49.5265C174.687 49.0182 174.975 48.2432 174.975 47.552H170.975ZM172.335 46H163.887V50H172.335V46ZM163.887 46C163.938 46 164.117 46.0113 164.335 46.1355C164.565 46.2672 164.708 46.4512 164.779 46.5936L161.202 48.3824C161.443 48.8661 161.821 49.3061 162.35 49.6085C162.866 49.9034 163.408 50 163.887 50V46ZM164.692 46.4365L153.3 28.0045L149.897 30.1075L161.289 48.5395L164.692 46.4365ZM153.387 28.1616C153.247 27.8816 153.011 27.5515 152.628 27.2959C152.232 27.0319 151.799 26.928 151.407 26.928V30.928C151.099 30.928 150.741 30.8454 150.409 30.6241C150.09 30.4111 149.907 30.145 149.81 29.9504L153.387 28.1616ZM151.407 26.928C150.604 26.928 150.04 27.3385 149.736 27.6418L152.565 30.4702C152.432 30.6029 152.039 30.928 151.407 30.928V26.928ZM149.587 27.809L145.555 32.865L148.682 35.359L152.714 30.303L149.587 27.809ZM145.33 33.2176C145.236 33.4039 144.991 33.901 144.991 34.496H148.991C148.991 34.6365 148.973 34.7471 148.96 34.8162C148.945 34.8874 148.929 34.9396 148.92 34.9685C148.902 35.0225 148.891 35.0388 148.907 35.0064L145.33 33.2176ZM144.991 34.496V47.232H148.991V34.496H144.991ZM144.991 47.232C144.991 47.0633 145.026 46.8875 145.099 46.7237C145.17 46.5647 145.258 46.4565 145.32 46.3938L148.149 49.2222C148.641 48.7302 148.991 48.0472 148.991 47.232H144.991ZM145.32 46.3938C145.46 46.2545 145.628 46.1469 145.808 46.0793C145.982 46.0141 146.129 46 146.223 46V50C146.864 50 147.579 49.7917 148.149 49.2222L145.32 46.3938ZM146.223 46H138.735V50H146.223V46ZM183.258 46.656L182.304 48.4141L182.317 48.4207L183.258 46.656ZM177.37 40.96L175.632 41.949L175.635 41.9556L175.639 41.9621L177.37 40.96ZM177.37 10.368L179.101 11.3701L179.101 11.3701L177.37 10.368ZM183.258 4.736L184.188 6.50652L184.199 6.5007L183.258 4.736ZM200.922 4.736L199.968 6.49406L199.986 6.50363L200.004 6.51285L200.922 4.736ZM206.874 10.368L205.143 11.3701L205.143 11.3701L206.874 10.368ZM200.922 46.72L201.852 48.4905L201.863 48.4847L200.922 46.72ZM197.786 38.72L196.351 37.3264L196.351 37.3264L197.786 38.72ZM197.786 12.736L196.312 14.0874L196.331 14.1088L196.351 14.1296L197.786 12.736ZM186.394 12.736L184.94 11.3628L184.939 11.364L186.394 12.736ZM186.394 38.72L184.939 40.092L184.949 40.1029L184.959 40.1136L186.394 38.72ZM192.09 46.704C189.042 46.704 186.429 46.0808 184.199 44.8913L182.317 48.4207C185.207 49.9619 188.482 50.704 192.09 50.704V46.704ZM184.212 44.8979C182.011 43.7047 180.321 42.0648 179.101 39.9579L175.639 41.9621C177.235 44.7192 179.47 46.8766 182.304 48.4141L184.212 44.8979ZM179.108 39.971C177.892 37.8336 177.258 35.345 177.258 32.448H173.258C173.258 35.951 174.032 39.137 175.632 41.949L179.108 39.971ZM177.258 32.448V18.752H173.258V32.448H177.258ZM177.258 18.752C177.258 15.9022 177.89 13.4613 179.101 11.3701L175.639 9.36593C174.034 12.1387 173.258 15.2872 173.258 18.752H177.258ZM179.101 11.3701C180.317 9.26869 182.001 7.65587 184.188 6.50648L182.328 2.96551C179.481 4.46146 177.239 6.6033 175.639 9.36593L179.101 11.3701ZM184.199 6.5007C186.429 5.31124 189.042 4.688 192.09 4.688V0.688C188.482 0.688 185.207 1.43009 182.317 2.97129L184.199 6.5007ZM192.09 4.688C195.187 4.688 197.792 5.31346 199.968 6.49406L201.876 2.97793C199.018 1.42787 195.735 0.688 192.09 0.688V4.688ZM200.004 6.51285C202.234 7.66488 203.932 9.27741 205.143 11.3701L208.605 9.36593C207 6.59459 204.73 4.45245 201.84 2.95914L200.004 6.51285ZM205.143 11.3701C206.354 13.4613 206.986 15.9022 206.986 18.752H210.986C210.986 15.2872 210.21 12.1387 208.605 9.36593L205.143 11.3701ZM206.986 18.752V32.448H210.986V18.752H206.986ZM206.986 32.448C206.986 35.345 206.352 37.8336 205.136 39.971L208.612 41.949C210.212 39.137 210.986 35.951 210.986 32.448H206.986ZM205.136 39.971C203.918 42.1103 202.214 43.7644 199.981 44.9553L201.863 48.4847C204.75 46.945 207.014 44.759 208.612 41.949L205.136 39.971ZM199.992 44.9495C197.81 46.0958 195.196 46.704 192.09 46.704V50.704C195.725 50.704 198.999 49.9895 201.852 48.4905L199.992 44.9495ZM192.09 42.96C194.902 42.96 197.344 42.0455 199.221 40.1136L196.351 37.3264C195.327 38.3812 193.972 38.96 192.09 38.96V42.96ZM199.221 40.1136C201.101 38.1779 201.962 35.6582 201.962 32.768H197.962C197.962 34.8272 197.372 36.2754 196.351 37.3264L199.221 40.1136ZM201.962 32.768V18.688H197.962V32.768H201.962ZM201.962 18.688C201.962 15.7978 201.101 13.2781 199.221 11.3424L196.351 14.1296C197.372 15.1806 197.962 16.6288 197.962 18.688H201.962ZM199.26 11.3846C197.416 9.37297 194.949 8.432 192.09 8.432V12.432C194.009 12.432 195.34 13.027 196.312 14.0874L199.26 11.3846ZM192.09 8.432C189.26 8.432 186.812 9.38024 184.94 11.3628L187.848 14.1092C188.877 13.0198 190.226 12.432 192.09 12.432V8.432ZM184.939 11.364C183.111 13.3021 182.282 15.8144 182.282 18.688H186.282C186.282 16.6123 186.861 15.1566 187.849 14.108L184.939 11.364ZM182.282 18.688V32.768H186.282V18.688H182.282ZM182.282 32.768C182.282 35.6416 183.111 38.1539 184.939 40.092L187.849 37.348C186.861 36.2994 186.282 34.8437 186.282 32.768H182.282ZM184.959 40.1136C186.836 42.0455 189.278 42.96 192.09 42.96V38.96C190.208 38.96 188.853 38.3812 187.829 37.3264L184.959 40.1136ZM223.456 46.592L222.537 48.3685L222.55 48.3748L223.456 46.592ZM217.632 41.216L215.903 42.2218L215.914 42.2405L215.925 42.2589L217.632 41.216ZM215.776 3.456L214.362 2.04179L214.362 2.04179L215.776 3.456ZM224.352 3.456L222.752 4.65599L222.923 4.88457L223.152 5.05599L224.352 3.456ZM226.656 38.72L225.22 40.1123L225.242 40.1344L225.264 40.1558L226.656 38.72ZM237.6 38.72L236.186 37.3058L236.186 37.3058L237.6 38.72ZM239.904 3.456L238.49 2.04178L238.49 2.04179L239.904 3.456ZM248.48 3.456L246.88 4.656L247.051 4.88456L247.28 5.05599L248.48 3.456ZM246.624 41.216L244.909 40.187L244.903 40.1964L246.624 41.216ZM240.8 46.592L239.893 44.8092L239.881 44.8156L240.8 46.592ZM232.16 46.512C229.138 46.512 226.556 45.9248 224.362 44.8092L222.55 48.3748C225.39 49.8192 228.611 50.512 232.16 50.512V46.512ZM224.375 44.8156C222.214 43.6979 220.55 42.1549 219.339 40.1731L215.925 42.2589C217.53 44.8851 219.749 46.9261 222.537 48.3684L224.375 44.8156ZM219.361 40.2102C218.193 38.2032 217.584 35.8699 217.584 33.152H213.584C213.584 36.4928 214.34 39.5354 215.903 42.2218L219.361 40.2102ZM217.584 33.152V3.968H213.584V33.152H217.584ZM217.584 3.968C217.584 4.06106 217.57 4.20832 217.505 4.38224C217.437 4.56232 217.33 4.73089 217.19 4.87021L214.362 2.04179C213.792 2.61126 213.584 3.32615 213.584 3.968H217.584ZM217.19 4.87021C217.127 4.93295 217.019 5.02092 216.86 5.09162C216.697 5.16439 216.521 5.2 216.352 5.2V1.2C215.537 1.2 214.854 1.54974 214.362 2.04179L217.19 4.87021ZM216.352 5.2H223.84V1.2H216.352V5.2ZM223.84 5.2C223.673 5.2 223.457 5.16471 223.234 5.05285C223.01 4.94099 222.852 4.78942 222.752 4.65599L225.952 2.256C225.446 1.58172 224.683 1.2 223.84 1.2V5.2ZM223.152 5.05599C223.019 4.95593 222.867 4.79814 222.755 4.57443C222.643 4.35071 222.608 4.13478 222.608 3.968H226.608C226.608 3.12515 226.226 2.36171 225.552 1.856L223.152 5.05599ZM222.608 3.968V33.216H226.608V3.968H222.608ZM222.608 33.216C222.608 35.9114 223.437 38.2738 225.22 40.1123L228.092 37.3277C227.144 36.3502 226.608 35.0433 226.608 33.216H222.608ZM225.264 40.1558C227.102 41.9386 229.465 42.768 232.16 42.768V38.768C230.333 38.768 229.026 38.2321 228.048 37.2842L225.264 40.1558ZM232.16 42.768C234.854 42.768 237.21 41.9386 239.014 40.1342L236.186 37.3058C235.26 38.2321 233.989 38.768 232.16 38.768V42.768ZM239.014 40.1342C240.849 38.2992 241.712 35.9294 241.712 33.216H237.712C237.712 35.0252 237.167 36.3248 236.186 37.3058L239.014 40.1342ZM241.712 33.216V3.968H237.712V33.216H241.712ZM241.712 3.968C241.712 4.06106 241.698 4.20832 241.633 4.38224C241.565 4.56232 241.458 4.73089 241.318 4.8702L238.49 2.04179C237.92 2.61126 237.712 3.32615 237.712 3.968H241.712ZM241.318 4.87021C241.255 4.93295 241.147 5.02092 240.988 5.09162C240.825 5.16439 240.649 5.2 240.48 5.2V1.2C239.665 1.2 238.982 1.54974 238.49 2.04178L241.318 4.87021ZM240.48 5.2H247.968V1.2H240.48V5.2ZM247.968 5.2C247.801 5.2 247.585 5.16471 247.362 5.05285C247.138 4.94099 246.98 4.78942 246.88 4.656L250.08 2.25599C249.574 1.58172 248.811 1.2 247.968 1.2V5.2ZM247.28 5.05599C247.147 4.95592 246.995 4.79813 246.883 4.57441C246.771 4.3507 246.736 4.13477 246.736 3.968H250.736C250.736 3.12516 250.354 2.36172 249.68 1.85601L247.28 5.05599ZM246.736 3.968V33.152H250.736V3.968H246.736ZM246.736 33.152C246.736 35.8587 246.111 38.1837 244.909 40.187L248.339 42.245C249.953 39.555 250.736 36.5039 250.736 33.152H246.736ZM244.903 40.1964C243.742 42.1558 242.092 43.6914 239.894 44.8092L241.706 48.3748C244.543 46.9326 246.775 44.8842 248.345 42.2356L244.903 40.1964ZM239.881 44.8156C237.737 45.9245 235.183 46.512 232.16 46.512V50.512C235.708 50.512 238.913 49.8195 241.719 48.3684L239.881 44.8156ZM287.578 3.456L285.978 4.656L286.149 4.88457L286.378 5.05599L287.578 3.456ZM275.034 47.808L273.62 46.3938L273.62 46.3938L275.034 47.808ZM266.458 47.808L264.858 49.008L265.029 49.2366L265.258 49.408L266.458 47.808ZM254.234 10.816L252.634 12.016L252.805 12.2446L253.034 12.416L254.234 10.816ZM254.234 3.456L252.82 2.04179L252.82 2.04179L254.234 3.456ZM287.066 5.2C286.899 5.2 286.683 5.16471 286.46 5.05285C286.236 4.94099 286.078 4.78942 285.978 4.656L289.178 2.25599C288.672 1.58172 287.909 1.2 287.066 1.2V5.2ZM286.378 5.05599C286.245 4.95593 286.093 4.79814 285.981 4.57443C285.869 4.35071 285.834 4.13478 285.834 3.968H289.834C289.834 3.12515 289.452 2.36171 288.778 1.856L286.378 5.05599ZM285.834 3.968V10.24H289.834V3.968H285.834ZM285.834 10.24C285.834 10.0712 285.87 9.89545 285.942 9.73172C286.013 9.57265 286.101 9.46453 286.164 9.40178L288.992 12.2302C289.484 11.7382 289.834 11.0552 289.834 10.24H285.834ZM286.164 9.40178C286.303 9.26247 286.472 9.15487 286.652 9.08734C286.826 9.02212 286.973 9.008 287.066 9.008V13.008C287.708 13.008 288.423 12.7997 288.992 12.2302L286.164 9.40178ZM287.066 9.008H275.61V13.008H287.066V9.008ZM275.61 9.008C275.195 9.008 274.516 9.11309 273.956 9.67379C273.395 10.2345 273.29 10.913 273.29 11.328H277.29C277.29 11.5296 277.238 12.0482 276.784 12.5022C276.33 12.9562 275.812 13.008 275.61 13.008V9.008ZM273.29 11.328V47.232H277.29V11.328H273.29ZM273.29 47.232C273.29 47.0633 273.326 46.8875 273.398 46.7237C273.469 46.5647 273.557 46.4565 273.62 46.3938L276.448 49.2222C276.94 48.7302 277.29 48.0472 277.29 47.232H273.29ZM273.62 46.3938C273.759 46.2545 273.928 46.1469 274.108 46.0793C274.282 46.0141 274.429 46 274.522 46V50C275.164 50 275.879 49.7917 276.448 49.2222L273.62 46.3938ZM274.522 46H267.034V50H274.522V46ZM267.034 46C267.131 46 267.244 46.0151 267.362 46.0546C267.481 46.0942 267.581 46.15 267.658 46.208L265.258 49.408C265.775 49.7956 266.388 50 267.034 50V46ZM268.058 46.608C268.116 46.6853 268.172 46.7848 268.211 46.9035C268.251 47.0223 268.266 47.1354 268.266 47.232H264.266C264.266 47.8781 264.47 48.4911 264.858 49.008L268.058 46.608ZM268.266 47.232V11.328H264.266V47.232H268.266ZM268.266 11.328C268.266 10.913 268.161 10.2345 267.6 9.67379C267.04 9.11309 266.361 9.008 265.946 9.008V13.008C265.744 13.008 265.226 12.9562 264.772 12.5022C264.318 12.0482 264.266 11.5296 264.266 11.328H268.266ZM265.946 9.008H254.81V13.008H265.946V9.008ZM254.81 9.008C254.907 9.008 255.02 9.02305 255.138 9.06263C255.257 9.10221 255.357 9.15804 255.434 9.216L253.034 12.416C253.551 12.8036 254.164 13.008 254.81 13.008V9.008ZM255.834 9.616C255.892 9.69328 255.948 9.7928 255.987 9.91154C256.027 10.0303 256.042 10.1434 256.042 10.24H252.042C252.042 10.8861 252.246 11.4991 252.634 12.016L255.834 9.616ZM256.042 10.24V3.968H252.042V10.24H256.042ZM256.042 3.968C256.042 4.06106 256.028 4.20832 255.963 4.38224C255.895 4.56232 255.788 4.73089 255.648 4.87021L252.82 2.04179C252.25 2.61126 252.042 3.32615 252.042 3.968H256.042ZM255.648 4.87021C255.585 4.93295 255.477 5.02092 255.318 5.09162C255.155 5.16439 254.979 5.2 254.81 5.2V1.2C253.995 1.2 253.312 1.54974 252.82 2.04179L255.648 4.87021ZM254.81 5.2H287.066V1.2H254.81V5.2Z"
					fill="black"
				/>

		</StyledLogo>
	);
};

export default Logo;