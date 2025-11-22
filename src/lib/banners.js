export async function getBanners() {
    const query = `
      {
        banners {
          nodes {
            title
            camposDoBanner {
              bannerDesktop {
                node {
                  mediaItemUrl
                }
              }
              bannerMobile {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    `;
  
    const response = await fetch("https://new.doriana.com.br/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      cache: "no-store",
    });
  
    const { data } = await response.json();
  
    return (
      data?.banners?.nodes?.map((b) => {
        const acf = b.camposDoBanner ?? {};
  
        return {
          title: b.title || "",
          image: acf.bannerDesktop?.node?.mediaItemUrl ?? "/banners/banner_principal.jpg",
          imageMobile: acf.bannerMobile?.node?.mediaItemUrl ?? "/banners/mobile/principal.png",
        };
      }) ?? []
    );
  }
  