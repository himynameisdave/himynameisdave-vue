<template>
    <ul class="profiles">
        <li v-for="profile in profiles" class="profile">
            <a :href="profile.url" :target="profile.target" class="profile-link">
                <Icon v-bind:name="profile.name"  />
            </a>
        </li>
    </ul>
</template>


<script>
import Icon from './Icon';

export default {
    name: 'Profiles',
    components: {
        Icon
    },
    data: () => ({
        profiles: [
            {
                name: 'twitter',
                url: 'https://twitter.com/dave_lunny',
                target: '_blank',
            }, {
                name: 'github',
                url: 'https://github.com/himynameisdave',
                target: '_blank',
            }, {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/davelunny/',
                target: '_blank',
            }, {
                name: 'medium',
                url: 'https://medium.com/@dave_lunny',
                target: '_blank',
            }, {
                name: 'email',
                url: 'mailto:d@velunny.com',
                target: '_self',
            },
            // {
            //     name: 'lastfm',
            //     url: 'https://www.last.fm/user/himynameisdave9',
            //     target: '_blank',
            // },
        ]
    })
};
</script>


<style scoped lang="less">
.profiles {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: row wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    margin: 0 auto;
    max-width: 475px;
    width: 80%;
    @media all and (min-width: 460px) {
        width: 98%;
    }
}
.profile {
    // height: 50px;
    width: 26%;
    margin-bottom: 1.5rem;
    transition: transform 0.35s ease-in-out;
    transform: scale(1);
    &:hover {
        transform: scale(1.15);
    }
    @media all and (min-width: 460px) {
        height: 50px;
        width: 50px;
    }
    &-icon {
        height: 100%;
        width: 100%;
    }
    &-link {
        height: 50px;
        width: 50px;

        &:hover {
            .icon {
                fill: #0F76AC;
            }
        }
    }
    .icon {
        fill: #002f47;
        transition: fill 0.325s ease-in-out;
    }
}
</style>
