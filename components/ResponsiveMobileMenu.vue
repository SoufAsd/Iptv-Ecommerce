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
                    },
                    {
                        url: '/shop',
                        title: 'Shop',
                    },
                    {
                        url: '',
                        title: 'About',
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