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
                name: 'lastfm',
                url: 'https://www.last.fm/user/himynameisdave9',
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
        ]
    })
};
</script>


<style scoped lang="less">
.profiles {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    list-style: none;
    margin: 0 auto;
    max-width: 475px;
    width: 98%;
}
.profile {
    height: 50px;
    width: 50px;
    &-icon {
        height: 100%;
        width: 100%;
    }
    &-link {
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
