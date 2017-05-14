<template>
  <ul class="socials">
      <li>
          <Box>
              <LastSong />
          </Box>
      </li>
      <li>
          <Box>
              <LastTweet />
          </Box>
      </li>
  </ul>
</template>

<script>
import Box from '../Box';
import LastSong from './LastSong';
import LastTweet from './LastTweet';

export default {
    name: 'Socials',
    components: {
        Box,
        LastSong,
        LastTweet,
    }
};
</script>

<style lang="less">
.socials {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0 auto 40px;
    max-width: 980px;
    list-style: none;
    @media all and (min-width: 660px) {
        // align-items: stretch;
        align-items: flex-start;
        flex-direction: row;
        justify-content: center;
    }
    li {
        display: flex;
        flex: 1;
        margin: 0 0 0.5rem;
        width: 85%;
        @media all and (min-width: 660px) {
            width: 40%;
            margin: 0 2.5%;
        }
    }
}
</style>
