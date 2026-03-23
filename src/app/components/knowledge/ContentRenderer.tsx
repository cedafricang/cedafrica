export default function ContentRenderer({ content }: any) {
  return (
    <div className="space-y-14">

      {content.map((block: any, i: number) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="text-3xl md:text-4xl font-medium tracking-tight"
              >
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p
                key={i}
                className="text-[18px] leading-[1.9] text-black/80 max-w-2xl"
              >
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul key={i} className="space-y-3 ml-5">
                {block.items.map((item: string, idx: number) => (
                  <li
                    key={idx}
                    className="list-disc text-black/70 text-[17px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "quote":
            return (
              <div
                key={i}
                className="border-l-2 border-black/20 pl-6 italic text-black/70 text-xl max-w-xl"
              >
                {block.text}
              </div>
            );

          default:
            return null;
        }
      })}

    </div>
  );
}