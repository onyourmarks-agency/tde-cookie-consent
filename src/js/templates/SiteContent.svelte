<script lang="ts">
  import { onMount } from 'svelte';

  export let content: string;

  let acceptedTags: string[] = [];
  let scriptTags: RegExpMatchArray | null = null;

  const loadScriptTag = (scriptTagString): void => {
    const dummyElement: HTMLElement = document.createElement('div');
    dummyElement.innerHTML = scriptTagString;

    const childElement = dummyElement?.firstElementChild;

    if (!childElement) {
      return;
    }

    const async = childElement.getAttribute('async');
    const src = childElement.getAttribute('src');

    const scriptTag: HTMLScriptElement = document.createElement('script');
    scriptTag.async = async ? async === 'true' : true;
    scriptTag.src = src ? src : '';

    document.head.appendChild(scriptTag);
  };

  onMount((): void => {
    const regExScript = /<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g;
    scriptTags = content.match(regExScript);

    if (scriptTags) {
      content = content.replace(regExScript, '');

      scriptTags.forEach((scriptTag): void => {
        if (acceptedTags.find((addedScriptTag) => addedScriptTag === scriptTag)) {
          return;
        }

        loadScriptTag(scriptTag);
        acceptedTags.push(scriptTag);
      });
    }
  });
</script>

{@html content}
