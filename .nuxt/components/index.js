export { default as AboutMission } from '../..\\components\\AboutMission.vue'
export { default as BlogItem } from '../..\\components\\BlogItem.vue'
export { default as BlogItemStyleTwo } from '../..\\components\\BlogItemStyleTwo.vue'
export { default as BlogSidebar } from '../..\\components\\BlogSidebar.vue'
export { default as BlogWrapper } from '../..\\components\\BlogWrapper.vue'
export { default as BrandLogoCarousel } from '../..\\components\\BrandLogoCarousel.vue'
export { default as Breadcrumb } from '../..\\components\\Breadcrumb.vue'
export { default as ContactInfo } from '../..\\components\\ContactInfo.vue'
export { default as DealWithCountdown } from '../..\\components\\DealWithCountdown.vue'
export { default as FooterStyleTwo } from '../..\\components\\FooterStyleTwo.vue'
export { default as FunFact } from '../..\\components\\FunFact.vue'
export { default as HeaderLogoCenterWithTransparent } from '../..\\components\\HeaderLogoCenterWithTransparent.vue'
export { default as HeaderOffcanvasMenuWithTransparent } from '../..\\components\\HeaderOffcanvasMenuWithTransparent.vue'
export { default as HeaderWithTopbar } from '../..\\components\\HeaderWithTopbar.vue'
export { default as HomeSidebarMenu } from '../..\\components\\HomeSidebarMenu.vue'
export { default as InstagramPostWrapper } from '../..\\components\\InstagramPostWrapper.vue'
export { default as Login } from '../..\\components\\Login.vue'
export { default as MiniCart } from '../..\\components\\MiniCart.vue'
export { default as Navigation } from '../..\\components\\Navigation.vue'
export { default as NewsletterStyleOne } from '../..\\components\\NewsletterStyleOne.vue'
export { default as NewsletterStyleTwo } from '../..\\components\\NewsletterStyleTwo.vue'
export { default as OffCanvasMobileMenu } from '../..\\components\\OffCanvasMobileMenu.vue'
export { default as ProductDetailsDescriptionReview } from '../..\\components\\ProductDetailsDescriptionReview.vue'
export { default as QuickView } from '../..\\components\\QuickView.vue'
export { default as Register } from '../..\\components\\Register.vue'
export { default as ResponsiveMobileMenu } from '../..\\components\\ResponsiveMobileMenu.vue'
export { default as SectionTitleWithSubTitle } from '../..\\components\\SectionTitleWithSubTitle.vue'
export { default as ShopSidebar } from '../..\\components\\ShopSidebar.vue'
export { default as TeamMembers } from '../..\\components\\TeamMembers.vue'
export { default as TestimonialOne } from '../..\\components\\TestimonialOne.vue'
export { default as TheFooter } from '../..\\components\\TheFooter.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'
export { default as WelcomeMessage } from '../..\\components\\WelcomeMessage.vue'
export { default as BannerItem } from '../..\\components\\banner\\BannerItem.vue'
export { default as BannerStyleFour } from '../..\\components\\banner\\BannerStyleFour.vue'
export { default as BannerStyleOne } from '../..\\components\\banner\\BannerStyleOne.vue'
export { default as BannerStyleThree } from '../..\\components\\banner\\BannerStyleThree.vue'
export { default as BannerStyleTwo } from '../..\\components\\banner\\BannerStyleTwo.vue'
export { default as HeroSlider } from '../..\\components\\hero\\HeroSlider.vue'
export { default as HeroSliderCosmetics } from '../..\\components\\hero\\HeroSliderCosmetics.vue'
export { default as HeroSliderFive } from '../..\\components\\hero\\HeroSliderFive.vue'
export { default as HeroSliderFour } from '../..\\components\\hero\\HeroSliderFour.vue'
export { default as HeroSliderSeven } from '../..\\components\\hero\\HeroSliderSeven.vue'
export { default as HeroSliderSix } from '../..\\components\\hero\\HeroSliderSix.vue'
export { default as HeroSliderThree } from '../..\\components\\hero\\HeroSliderThree.vue'
export { default as HeroSliderTwo } from '../..\\components\\hero\\HeroSliderTwo.vue'
export { default as PolicyServicePolicy } from '../..\\components\\policy\\ServicePolicy.vue'
export { default as PolicyServicePolicyFour } from '../..\\components\\policy\\ServicePolicyFour.vue'
export { default as PolicyServicePolicyThree } from '../..\\components\\policy\\ServicePolicyThree.vue'
export { default as PolicyServicePolicyTwo } from '../..\\components\\policy\\ServicePolicyTwo.vue'
export { default as ProductDetailsWrapper } from '../..\\components\\product\\ProductDetailsWrapper.vue'
export { default as ProductGridItem } from '../..\\components\\product\\ProductGridItem.vue'
export { default as ProductGridItemTwo } from '../..\\components\\product\\ProductGridItemTwo.vue'
export { default as ProductGridStyleThree } from '../..\\components\\product\\ProductGridStyleThree.vue'
export { default as ProductWrapper } from '../..\\components\\product\\ProductWrapper.vue'
export { default as ProductWrapperCosmetics } from '../..\\components\\product\\ProductWrapperCosmetics.vue'
export { default as ProductWrapperFive } from '../..\\components\\product\\ProductWrapperFive.vue'
export { default as ProductWrapperFour } from '../..\\components\\product\\ProductWrapperFour.vue'
export { default as ProductWrapperSeven } from '../..\\components\\product\\ProductWrapperSeven.vue'
export { default as ProductWrapperThree } from '../..\\components\\product\\ProductWrapperThree.vue'
export { default as ProductWrapperTwo } from '../..\\components\\product\\ProductWrapperTwo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
