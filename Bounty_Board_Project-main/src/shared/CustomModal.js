import { Modal } from "antd"

const CustomModal = ({ open, onCancel, footer, closable, width, className = "!p-0", styles = { padding: 0, borderRadius: "16px" }, children, title, closeIcon }) => {
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onCancel}
      footer={footer}
      closable={closable}
      width={width}
      className={className}
      styles={styles}
      closeIcon={closeIcon}
    >

      {children}
    </Modal>
  )
}

export default CustomModal