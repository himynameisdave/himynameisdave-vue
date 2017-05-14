<template>
    <div class="last-song">
        <div
            v-if="this.isLoading"
            class="last-song__loading"
        >
            Loading Dave's last played song....
        </div>
        <h5 class="last-song__heading" v-if="!this.isLoading">
            &#127911;
            <span v-if="this.lastFmData.nowplaying">
                Currently listening to
            </span>
            <span v-if="!this.lastFmData.nowplaying">
                Last played song
            </span>
        </h5>
        <div
            v-if="!this.isLoading"
            class="last-song__details"
        >
            <div class="last-song__details--l">
                <img :src="this.lastFmData.image" :alt="this.lastFmData.album" class="last-song__details-image" />
            </div>
            <div class="last-song__details--l">
                <div class="last-song__details-track">
                    {{ this.lastFmData.name }}
                </div>
                <div class="last-song__details-artist">
                    {{ this.lastFmData.artist }}
                </div>
                <div class="last-song__details-album">
                    {{ this.lastFmData.album }}
                </div>
                <hr class="last-song__details-row" />
                <div class="last-song__details-link">
                    <Link url="https://www.last.fm/user/himynameisdave9" text="See more on Last.fm..." target="_blank" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import truncate from 'truncate';
import Link from '../Link';
require('isomorphic-fetch');

const TRUNCATION_LEVEL = 40;
export default {
    name: 'LastSong',
    components: {
        Link
    },
    data() {
        return {
            isLoading: true,
            lastFmData: null,
        };
    },
    beforeMount() {
        fetch('http://hook.io/himynameisdave/last-played-song')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return {};
            })
            .then(data => {
                this.isLoading = false;
                this.lastFmData = {
                    ...data,
                    name: truncate(data.name, TRUNCATION_LEVEL),
                    artist: truncate(data.artist, TRUNCATION_LEVEL),
                    album: truncate(data.album, TRUNCATION_LEVEL),
                };
            })
            .catch(e => {
                throw new Error(e);
            });
    }
};
</script>

<style lang="less" scoped>
.last-song {

}

.last-song__loading {
    font-style: italic;
    font-weight: 300;
    padding: 30px 0;
}

.last-song__heading {
    font-weight: 300;
    font-size: 1.25rem;
    margin: 0 0 18px;
    text-transform: lowercase;
}

.last-song__details {
    line-height: 1.6181;
    align-items: center;
    display: flex;
    font-size: 0.9rem;
    flex-direction: row;

    &--l {
        &:first-child {
            width: 125px;
        }
        &:last-child {
            padding-left: 12px;
            width: 70%;
        }
    }

    &-image {
        max-width: 100%;
    }

    &-row {
        border: 0;
        border-bottom: 1px solid fade(#000, 10%);
        margin: 12px 0 10px;
        width: 61.8%;
    }

    &-track {
        font-size: 1.175rem;
        font-weight: 300;
        margin-bottom: 3px;
    }

    &-artist {
        font-weight: 700;
        font-size: 1rem;
        margin-bottom: 4px;
    }

    &-album {
        font-weight: 700;
        font-size: 0.725rem;
        margin-bottom: 2px;
        text-transform: uppercase;
    }

    &-link {
        font-size: 0.8rem;
        a {
            cursor: pointer;
        }
    }
}
</style>
