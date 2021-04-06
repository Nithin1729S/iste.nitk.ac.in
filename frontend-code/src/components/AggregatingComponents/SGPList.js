import SGPItem from "../RenderingComponents/SGPItem";

const SGPList = ({ data }) => {
    const SGPItems = data.map((item) => (
        <SGPItem key={item.title} item={item} />
    ));
    return SGPItems;
};
export default SGPList;
