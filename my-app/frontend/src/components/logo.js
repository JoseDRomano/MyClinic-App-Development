import Image from 'next/image'

export const Logo = () => {

    return (
        <Image
            src="/logo192.png"
            width={100}
            height={110}
            alt="Train with me logo"
        />
    );
};
