type KeyValueViewerProps = {
    title: string;
    value: string;
};

const KeyValueViewer = ({title, value}: KeyValueViewerProps) => {
    return <div className="flex items-center w-40">
        <span className={'w-1/2 text-gray-500'}>{title}</span>
        <strong className={'flex-1 text-right text-black text-sm'}>{value}</strong>
    </div>;
};

export default KeyValueViewer;