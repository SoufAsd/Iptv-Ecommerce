<template>
    <ul class='mobile-menu'>
        <li v-for='(link, i) in menus' :key='i'>
            <n-link :to="link.url">
                {{ link.title }}
            </n-link>
            <span class='submenu-toggle' v-if="link.submenu">
                <i class="pe-7s-angle-down"></i>
            </span>
            <ul class="submenu" v-if="link.submenu">
                <li v-for='(link, i) in link.submenu' :key='i' class="title">
                    <n-link :to="link.url"> {{ link.title }} </n-link>
                    <span class='submenu-toggle' v-if="link.submenu">
                        <i class="pe-7s-angle-down"></i>
                    </span> 
                    <ul class="submenu" v-if="link.submenu">
                        <li v-for='(link, i) in link.submenu' :key='i'>
                            <n-link :to="link.url"> {{ link.title }} </n-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                menus: [
                    {
                        url: '/',
                        title: 'Home',
                        submenu: [
                            {
                                url: '',
                                title: 'Home Group 01',
                                submenu: [
                                    {
                                        url: '/',
                                        title: 'Home Fashion One',
                                    },
                                    {
                                        url: '/home-fashion-two',
                                        title: 'Home Fashion Two',
                                    },
                                    {
                                        url: '/home-fashion-three',
                                        title: 'Home Fashion Three',
                                    }
                                ]
                            },
                            {
                                url: '',
                                title: 'Home Group 02',
                                submenu: [
                                    {
                                        url: '/home-fashion-four',
                                        title: 'Home Fashion Four',
                                    },
                                    {
                                        url: '/home-fashion-five',
                                        title: 'Home Fashion Five',
                                    },
                                    {
                                        url: '/home-fashion-six',
                                        title: 'Home Fashion Six',
                                    }
                                ]
                            },
                            {
                                url: '',
                                title: 'Home Group 03',
                                submenu: [
                                    {
                                        url: '/home-fashion-seven',
                                        title: 'Home Fashion Seven',
                                    },
                                    {
                                        url: '/home-cosmetics',
                                        title: 'Home Cosmetics',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        url: '/shop',
                        title: 'Shop',
                        submenu: [
                            {
                                url: '',
                                title: 'shop layout',
                                submenu: [
                                    {
                                        url: '/shop',
                                        title: 'shop grid standard',
                                    },
                                    {
                                        url: '/shop-grid-two-column',
                                        title: 'shop grid two column',
                                    },
                                    {
                                        url: '/shop-grid-no-sidebar',
                                        title: 'shop grid no sidebar',
                                    },
                                    {
                                        url: '/shop-grid-full-width',
                                        title: 'shop grid full width',
                                    },
                                    {
                                        url: '/shop-grid-right-sidebar',
                                        title: 'shop grid right sidebar',
                                    },
                                    {
                                        url: '/shop-list-standard',
                                        title: 'shop list standard',
                                    },
                                    {
                                        url: '/shop-list-full-width',
                                        title: 'shop list full width',
                                    },
                                ]
                            },
                            {
                                url: '',
                                title: 'product details',
                                submenu: [
                                    {
                                        url: '/product/crew-ventile-coat-one',
                                        title: 'product variation',
                                    },
                                    {
                                        url: '/product/product-affiliate',
                                        title: 'product affiliate',
                                    },
                                    {
                                        url: '/product/women-winter-overcoat-one',
                                        title: 'product simple',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        url: '',
                        title: 'Pages',
                        submenu: [
                            {
                                url: '/cart',
                                title: 'Cart',
                            },
                            {
                                url: '/checkout',
                                title: 'Checkout',
                            },
                            {
                                url: '/wishlist',
                                title: 'Wishlist',
                            },
                            {
                                url: '/compare',
                                title: 'Compare',
                            },
                            {
                                url: '/about',
                                title: 'About us',
                            },
                            {
                                url: '/my-account',
                                title: 'My Account',
                            },
                            {
                                url: '/login-register',
                                title: 'Login / Register',
                            },
                            {
                                url: '/contact',
                                title: 'Contact us',
                            },
                            {
                                url: '/privacy-policy',
                                title: 'Privacy Policy',
                            },
                            {
                                url: '/terms-conditions',
                                title: 'Terms & Conditions',
                            },
                        ]
                    },
                    {
                        url: '/blog',
                        title: 'Blog',
                        submenu: [
                            {
                                url: '/blog',
                                title: 'blog standard',
                            },
                            {
                                url: '/blog/blog-right-sidebar',
                                title: 'blog right sidebar',
                            },
                            {
                                url: '/blog/blog-without-sidebar',
                                title: 'blog no sidebar',
                            },
                            {
                                url: '/blog/a-guide-to-latest-trends-product',
                                title: 'blog details',
                            }
                        ]
                    },
                    {
                        url: '/contact',
                        title: 'Contact',
                    }
                ]
            }
        },
        mounted() {
            let getSiblings = function (e) {
                let siblings = []; 
                if(!e.parentNode) {
                    return siblings;
                }
                let sibling  = e.parentNode.firstChild;
                while (sibling) {
                    if (sibling.nodeType === 1 && sibling !== e) {
                        siblings.push(sibling);
                    }
                    sibling = sibling.nextSibling;
                }
                return siblings;
            };

            const subMenuToggle = document.querySelectorAll('.submenu-toggle');
            subMenuToggle.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    if(!this.classList.contains('active')) {
                        this.classList.add('active')
                        this.nextElementSibling.classList.add('active')
                        this.closest('li').classList.add('active')
                        getSiblings(this.closest('li')).forEach(function(item) {
                            item.classList.remove('active')
                            item.querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child) {
                                child.classList.remove('active')
                            })
                        })
                    } else {
                        this.closest('li').classList.remove('active')
                        this.closest('li').querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child) {
                            child.classList.remove('active')
                        })
                    }
                })
            })
        }
    }
</script>



<style lang='scss' scoped>
    .mobile-menu {
        li:not(:last-child) {
            margin-bottom: 5px;
        }
        li {
            position: relative;
            a {
                font-weight: 600;
                line-height: 35px;
                text-transform: capitalize;
            }
        }
        .submenu {
            display: none;
            padding-top: 5px;
            padding-left: 15px;
            &.active {
                display: block;
            }
            li {
                margin-bottom: 5px;
                
                &.title > {
                    a {
                        font-weight: 500;
                    }
                }
                .submenu {
                    li {
                        a {
                            line-height: 25px;
                            font-weight: 400;
                        }
                    }
                }
            }
        }
        .submenu-toggle {
            width: 35px;
            height: 35px;
            background-color: #f3f3f3;
            text-align: center;
            font-size: 28px;
            display: inline-block;
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;

            i {
                transition: 0.3s;
                line-height: 35px;
            }
            &.active {
                i {
                    transform: rotate(-180deg);
                }
            }
        }
    }
</style>