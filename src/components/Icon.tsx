import Image from "next/image";

const Icon = (props: { name: string; size: number }) => {
  return (
    <Image
      src={`/icons/${props.name}.svg`}
      alt={`${props.name} icon`}
      width={props.size}
      height={props.size}
      sizes="100vw"
      style={{
        width: props.size + "px",
        height: "auto",
      }}
    />
  );
};

export default Icon;
