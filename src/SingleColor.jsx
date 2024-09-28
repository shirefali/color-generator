import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
    const { hex, weight } = color;
    const saveToClipboard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success(`Color copied to clipboard`);
            } catch (error) {
                toast.error("Failed to copy to clipboard");
            }
        } else {
            toast.error("clipboard acces not available");
        }
    };
    return (
        <article
            className={index > 10 ? "color color-light" : "color"}
            style={{ background: `#${hex}` }}
            onClick={saveToClipboard}
        >
            <p className="color-value">#{hex} </p>
            <p className="percent-value">{weight}%</p>
        </article>
    );
};

export default SingleColor;
