import Image from 'next/image';

export default function ChatIcon({ url = '/icons/user-icon.svg' }) {
    return <Image src={url} alt="inbox icon" className="appLogo" width={30} height={30} />;
}
