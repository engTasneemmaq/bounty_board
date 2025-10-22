import { message, Upload } from 'antd';

export const UploadDocuments = ({condition}) => {
  const AddIcon = () => (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.999 28.499C22.6264 28.499 27.999 23.1264 27.999 16.499C27.999 9.87161 22.6264 4.49902 15.999 4.49902C9.37161 4.49902 3.99902 9.87161 3.99902 16.499C3.99902 23.1264 9.37161 28.499 15.999 28.499Z"
        stroke="#0A65CC"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M11.001 16.499H21.001"
        stroke="#0A65CC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.999 11.501V21.501"
        stroke="#0A65CC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const { Dragger } = Upload;
  const props = {
    name: 'file',
    multiple: false,
    accept: 'application/pdf', 
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props} className="w-[312px] h-[82px]">
      <div className="flex flex-row items-center gap-3">
        <p>
          <AddIcon />
        </p>
        <div className="flex flex-col items-start">
          <p className="ant-upload-text font-[14px] text-medium"> {condition === 'cv' ? 'Add Cv/Resume' : 'Add Bounty Brief (PDF)' } </p>
          <p className="ant-upload-hint font-[14px] text-normal">
            Browse file or drop here. Only PDF
          </p>
        </div>
      </div>
    </Dragger>
  );
};
