import SigProjectCard from "../RenderingComponents/SigProjectCard";

const SGPList = ({ data }) => {
    const SGPItems = data.map((item, index) => {
        const { id, name, summary, img_url, file_url } = item;
        return (
            <div className="row project-item">
                <SigProjectCard
                    key={id}
                    isImageLeft={true}
                    projID={file_url}
                    name={name}
                    description={summary}
                    imgUrl={img_url}
                    isLinkExternal={true}
                />
            </div>
        );
    });
    return SGPItems;
};
export default SGPList;
