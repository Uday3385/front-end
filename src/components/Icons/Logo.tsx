import Image from 'next/image';

export default function Logo() {
    return <Image src="/icons/logo-main.svg" alt="Clinisys" className="appLogo" width={145} height={28} priority />;
}
