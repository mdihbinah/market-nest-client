"use client";

import { Card } from "@heroui/react";
import {
    ShoppingBag,
    ShieldCheck,
    Store,
    Truck,
    CreditCard,
    Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Store,
        title: "Multi Vendor Marketplace",
        desc: "Create and manage multiple stores with advanced vendor dashboards.",
    },
    {
        icon: ShoppingBag,
        title: "Smart Product Management",
        desc: "Powerful product CRUD, variants, inventory and analytics.",
    },
    {
        icon: CreditCard,
        title: "Secure Payments",
        desc: "Stripe, PayPal, SSLCommerz and wallet integrations.",
    },
    {
        icon: Truck,
        title: "Advanced Shipping",
        desc: "Delivery zones, tracking and courier integrations.",
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        desc: "JWT, 2FA, RBAC, rate limiting and fraud protection.",
    },
    {
        icon: Sparkles,
        title: "AI Recommendations",
        desc: "Personalized shopping experience using AI engine.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="relative py-28 overflow-hidden">
            {/* Animated Background Blobs */}
            <motion.div
                animate={{
                    x: [0, 80, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                }}
                className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 60, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                }}
                className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/20 blur-[140px]"
            />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <p className="text-primary font-semibold mb-4">
                        Powerful Features
                    </p>

                    <h2 className="text-5xl font-bold">
                        Everything Needed To Build A
                        <span className="text-primary">
                            {" "}Modern Marketplace
                        </span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.7,
                                }}
                                whileHover={{
                                    y: -15,
                                    rotateX: 8,
                                    rotateY: -8,
                                }}
                            >
                                <Card
                                    className="
                    group
                    bg-background/60
                    backdrop-blur-xl
                    border border-white/10
                    overflow-hidden
                    relative
                  "
                                >
                                    {/* Animated Gradient Border */}
                                    <motion.div
                                        animate={{
                                            rotate: 360,
                                        }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="
                      absolute
                      inset-[-2px]
                      bg-gradient-to-r
                      from-primary
                      via-pink-500
                      to-cyan-500
                      opacity-0
                      group-hover:opacity-100
                      blur-xl
                    "
                                    />

                                    <div className="relative z-10 p-8">
                                        <motion.div
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 12,
                                            }}
                                            className="
                        h-16 w-16
                        rounded-2xl
                        bg-primary/10
                        flex items-center justify-center
                        mb-6
                      "
                                        >
                                            <Icon
                                                className="text-primary"
                                                size={30}
                                            />
                                        </motion.div>

                                        <h3 className="text-2xl font-bold mb-3">
                                            {feature.title}
                                        </h3>

                                        <p className="text-default-500 leading-7">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}