import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ClipboardList, UserPen } from "lucide-react";

const Dashboard = () => {
  const items = [
    { icon: ShoppingCart, title: "My Orders", href: "/dashboard/orders" },
    { icon: ClipboardList, title: "My Wishlist", href: "/dashboard/wishlist" },
    { icon: UserPen, title: "My Account", href: "/dashboard/accountdetails" },
  ];

  return (
    <div>
      <div>
        <Image
          src="/dashboard_banner.svg"
          width={800}
          height={200}
          alt="Dashboard Banner"
          className="mx-auto w-full rounded-lg"
        />
      </div>

      <h1 className="py-4 lg:py-9 text-sm md:text-[16px] lg:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit rem
        eaque. Hic exercitationem odio eaque animi architecto doloribus, sit
        unde deserunt nemo, quis quia. Quas accusantium molestias aspernatur ab.
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ icon: Icon, title, href }, index) => (
          <Link
            key={index}
            href={href}
            className="bg-accent rounded-[4px] border border-border border-dashed p-5 transition-transform transform hover:scale-105 block"
          >
            <div className="p-5 lg:p-6 max-w-[80px] lg:max-w-[100px] w-full max-h-[80px] lg:max-h-[100px] h-full m-auto rounded-full bg-secondary font-medium leading-[150%]">
              <Icon
                className="text-ring m-auto w-[30px] h-[30px] md:w-8 md:h-8 lg:w-10 lg:h-10"
                size={40}
                strokeWidth={2}
              />
            </div>
            <h4 className="text-lg md:text-xl lg:text-2xl text-secondary text-center py-2 lg:py-4">
              {title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
