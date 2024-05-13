/**
 * Top Navigation Bar
 * 
 * Hierarchy: App -> TopNav
 * 
 * Children: None
 * @param {Object} props 
 * @param {Number} props.tokens
 * @returns 
 */
export function TopNav(props) {
  return (
    <div className="top-nav">
	{/* <div>Remaining Tokens: {props.tokens}</div> */}
      <div className="profile">
        {/* <div className="text-wrapper">User Name</div>
        <div className="avatar-main" />
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M23.9474 19.4412C24.4745 19.4414 24.9813 19.6422 25.3628 20.0018C25.7443 20.3615 25.9713 20.8525 25.9966 21.3731C26.0219 21.8936 25.8437 22.4039 25.4989 22.7981C25.1541 23.1923 24.6691 23.4402 24.1444 23.4905L23.9474 23.5H2.05263C1.52549 23.4997 1.01866 23.299 0.637155 22.9393C0.25565 22.5797 0.0287204 22.0887 0.00338785 21.5681C-0.0219447 21.0475 0.156262 20.5373 0.501082 20.1431C0.845902 19.7489 1.3309 19.5009 1.85558 19.4506L2.05263 19.4412H23.9474ZM23.9474 9.97059C24.4918 9.97059 25.0139 10.1844 25.3988 10.565C25.7837 10.9456 26 11.4618 26 12C26 12.5382 25.7837 13.0544 25.3988 13.435C25.0139 13.8156 24.4918 14.0294 23.9474 14.0294H2.05263C1.50824 14.0294 0.986145 13.8156 0.601202 13.435C0.216259 13.0544 0 12.5382 0 12C0 11.4618 0.216259 10.9456 0.601202 10.565C0.986145 10.1844 1.50824 9.97059 2.05263 9.97059H23.9474ZM23.9474 0.5C24.4918 0.5 25.0139 0.713812 25.3988 1.0944C25.7837 1.47499 26 1.99118 26 2.52941C26 3.06765 25.7837 3.58383 25.3988 3.96442C25.0139 4.34501 24.4918 4.55882 23.9474 4.55882H2.05263C1.50824 4.55882 0.986145 4.34501 0.601202 3.96442C0.216259 3.58383 0 3.06765 0 2.52941C0 1.99118 0.216259 1.47499 0.601202 1.0944C0.986145 0.713812 1.50824 0.5 2.05263 0.5H23.9474Z" fill="#F99797"/>
		</svg> */}
      </div>
    </div>
  );
};