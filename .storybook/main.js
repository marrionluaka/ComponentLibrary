module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-postcss", {
    name: '@storybook/addon-storysource',
    options: {
      loaderOptions: {
        injectStoryParameters: false
      }
    }
  }],
  core: {
    builder: "webpack5"
  }
};