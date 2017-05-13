<template>
  <ul class="socials">
      <li>
          <Box>
              <LastSong />
          </Box>
      </li>
      <li>
          <Box>
              <span>im in a box</span>
          </Box>
      </li>
  </ul>
</template>

<script>
import Box from '../Box';
import LastSong from './LastSong';

export default {
    name: 'Socials',
    components: {
        Box,
        LastSong
    }
};
</script>

<style lang="less">
.socials {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0 auto 30px;
    max-width: 980px;
    list-style: none;
    @media all and (min-width: 660px) {
        align-items: flex-start;
        flex-direction: row;
        justify-content: center;
    }
    li {
        width: 85%;
        margin: 0 0 0.5rem;
        @media all and (min-width: 660px) {
            width: 40%;
            margin: 0 2.5%;
        }
    }
}
</style>
