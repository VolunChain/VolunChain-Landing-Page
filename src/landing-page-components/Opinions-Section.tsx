import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { ReviewProps } from "@/types/Marquee-typ/reviews-type";

const reviews: ReviewProps[] = [
    {
        name: "Jack",
        username: "@jack",
        body: "Thanks to VolunChain, I found volunteer opportunities that align with my interests and skills.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "The platform makes volunteering accessible and rewarding, especially with NFT incentives.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "Earning NFTs for my volunteer work has been a great motivation to keep contributing!",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "VolunChain made it easy for me to connect with organizations that truly need my help.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "A revolutionary way to volunteer—transparent, efficient, and rewarding!",
        img: "https://avatar.vercel.sh/james",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-[#0F112B] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-[#0F112B] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center text-center justify-center overflow-hidden">
            <div
                className="mb-8"
            >
                <h2
                    className="text-2xl text-[#73B9EB] mb-2"
                >
                    What users say
                </h2>
                <h3
                    className="text-2xl md:text-5xl font-bold text-white"
                >
                    Check out comments about <br /> VolunChain
                </h3>
            </div>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
