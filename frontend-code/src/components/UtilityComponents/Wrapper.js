const Wrapper = ({ shouldRender, children }) => {
    return shouldRender ? <>{children}</> : null;
};
export default Wrapper;
