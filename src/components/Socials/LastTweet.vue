<template>
    <div class="last-tweet">
        <div
            v-if="this.isLoading"
            class="last-tweet__loading"
        >
            Loading Dave's last played song....
        </div>
        <h5
            v-if="!this.isLoading"
            class="last-tweet__heading"
        >
            &#128038; last tweet
        </h5>
        <div
            class="last-tweet__content"
            v-if="!this.isLoading"
        >
            <div class="last-tweet__content-text">
                {{ this.tweetData.text }}
            </div>
            <hr class="last-tweet__content-row" />
            <div class="last-tweet__content-link">
                <Link url="https://twitter.com/dave_lunny" text="See more tweets..." target="_blank" />
            </div>
        </div>
    </div>
</template>

<script>
import Link from '../Link';


export default {
    name: 'LastTweet',
    components: {
        Link,
    },
    data() {
        return {
            isLoading: true,
            tweetData: null,
        };
    },
    beforeMount() {
        fetch('http://hook.io/himynameisdave/last-tweet')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return {};
            })
            .then(data => {
                this.isLoading = false;
                this.tweetData = data;
                console.log('this.tweetData', this.tweetData);
            })
            .catch(e => {
                throw new Error(e);
            });
    }
};
</script>

<style lang="less">
.last-tweet {

}

.last-tweet__loading {
    font-style: italic;
    font-weight: 300;
    padding: 30px 0;
}

.last-tweet__heading {
    font-weight: 300;
    font-size: 1.25rem;
    margin: 0 0 18px;
    text-transform: lowercase;
}

.last-tweet__content {
    &-text {
        font-size: 1rem;
        font-weight: 300;
        padding: 0 16px;
        position: relative;
        &:before,
        &:after {
            color: rgba(0, 0, 0, 0.2);
            display: block;
            font-size: 4rem;
            line-height: 1;
            font-family: Georgia, Times, serif;
            position: absolute;
        }
        &:before {
            content: '“';
            top: -4%;
            left: -3%;
        }
        &:after {
            content: '”';
            bottom: -5%;
            right: 1%;
        }
    }
    &-row {
        border: 0;
        border-bottom: 1px solid fade(#000, 10%);
        margin: 15px auto 12px;
        width: 61.8%;
    }
    &-link {
        font-size: 0.8rem;
        a {
            cursor: pointer;
        }
    }
}

</style>
