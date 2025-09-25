import BannerSection from "@/components/BannerSection";
import CategorySection from "@/components/CategorySection";
import NewsletterSection from "@/components/NewsletterSection";
import { PageWrapper } from "@/components/PageWrapper";
import PageWrapperContent from "@/components/PageWrapper/PageWrapperContent";
import PageWrapperHeader from "@/components/PageWrapper/PageWrapperHeader";
import ProductsSection from "@/components/ProductsSection";

export default function Home(){
    return (
        <PageWrapper.Root>
            <PageWrapperHeader />

            <PageWrapperContent>
                <BannerSection />
                <CategorySection />
                <ProductsSection />
                <NewsletterSection />
            </PageWrapperContent>
           
        </PageWrapper.Root>
    )
}