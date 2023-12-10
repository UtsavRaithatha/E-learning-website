import Image from "next/image";

export const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Image
        height={45}
        width={45}
        alt="logo"
        src="/logo.svg"
      />
      <p style={{ marginLeft: '10px' }}>EduVerse</p>
    </div>
  )
}