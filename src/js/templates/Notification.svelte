<script lang="ts">
  import { content } from '../store/content';
  import { overlayShow } from '../services/TemplateService';
</script>

<div class="oymcc__notification">
  <h3 class="oymcc__notification__title">{$content?.notification.title}</h3>
  <p class="oymcc__notification__desc">{$content?.notification.description}</p>
  <button class="oymcc__notification__button oymcc__button" on:click={() => overlayShow()}>
    <span>{$content?.notification.button}</span>
  </button>
</div>

<style lang="scss">
  .oymcc__notification {
    display: flex;
    flex-direction: column;
    padding: var(--oymcc-notification-padding);
    border: var(--oymcc-notification-border);
    border-radius: var(--oymcc-notification-border-radius);
    background: var(--oymcc-notification-background);
    text-align: center;
  }

  .oymcc__notification__title {
    font-size: var(--oymcc-notification-heading-font-size);
  }

  .oymcc__notification__desc {
    font-size: var(--oymcc-notification-font-size);
  }

  .oymcc__notification__button {
    align-self: center;
    border: var(--oymcc-button-notification-border);
    background: var(--oymcc-button-notification-background);
    color: var(--oymcc-button-notification-color);
    font-weight: var(--oymcc-button-notification-font-weight);
    font-size: var(--oymcc-button-notification-font-size);

    &:hover {
      border: var(--oymcc-button-notification-hover-border);
      background: var(--oymcc-button-notification-hover-background);
      color: var(--oymcc-button-notification-hover-color);
    }
  }
</style>
