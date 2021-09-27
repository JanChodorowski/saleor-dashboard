import {
  ChannelData,
  ChannelPreorderArgs,
  ChannelPriceAndPreorderData,
  ChannelPriceArgs,
  ChannelPriceData
} from "@saleor/channels/utils";
import { FormChange } from "@saleor/hooks/useForm";
import { getById } from "@saleor/orders/components/OrderReturnPage/utils";

export function createChannelsPriceChangeHandler(
  channelListings: ChannelData[],
  updateChannels: (data: ChannelData[]) => void,
  triggerChange: () => void
) {
  return (id: string, priceData: ChannelPriceArgs) => {
    const { costPrice, price } = priceData;
    const channelIndex = channelListings.findIndex(
      channel => channel.id === id
    );
    const channel = channelListings[channelIndex];

    const updatedChannels = [
      ...channelListings.slice(0, channelIndex),
      {
        ...channel,
        costPrice,
        price
      },
      ...channelListings.slice(channelIndex + 1)
    ];
    updateChannels(updatedChannels);

    triggerChange();
  };
}

export function createChannelsPreorderChangeHandler(
  channelListings: ChannelData[],
  updateChannels: (data: ChannelData[]) => void,
  triggerChange: () => void
) {
  return (id: string, preorderData: ChannelPreorderArgs) => {
    const { preorderThreshold, unitsSold } = preorderData;

    const channelIndex = channelListings.findIndex(getById(id));

    const channel = channelListings[channelIndex];

    const updatedChannels = [
      ...channelListings.slice(0, channelIndex),
      {
        ...channel,
        preorderThreshold,
        unitsSold
      },
      ...channelListings.slice(channelIndex + 1)
    ];
    updateChannels(updatedChannels);

    triggerChange();
  };
}

export function createChannelsChangeHandler(
  channelsData: ChannelData[],
  updateChannels: (data: ChannelData[]) => void,
  triggerChange: () => void
) {
  return (
    id: string,
    data: Omit<ChannelData, "name" | "price" | "currency" | "id">
  ) => {
    const channelIndex = channelsData.findIndex(channel => channel.id === id);
    const channel = channelsData[channelIndex];

    const updatedChannels = [
      ...channelsData.slice(0, channelIndex),
      {
        ...channel,
        ...data
      },
      ...channelsData.slice(channelIndex + 1)
    ];

    updateChannels(updatedChannels);

    triggerChange();
  };
}

export function createVariantChannelsChangeHandler(
  channelListings: ChannelPriceData[],
  setData: (data: ChannelPriceData[]) => void,
  triggerChange: () => void
) {
  return (id: string, priceData: ChannelPriceArgs) => {
    const { costPrice, price } = priceData;
    const channelIndex = channelListings.findIndex(
      channel => channel.id === id
    );
    const channel = channelListings[channelIndex];

    const updatedChannels = [
      ...channelListings.slice(0, channelIndex),
      {
        ...channel,
        costPrice,
        price
      },
      ...channelListings.slice(channelIndex + 1)
    ];
    setData(updatedChannels);
    triggerChange();
  };
}

export function createProductTypeSelectHandler(
  setProductType: (productTypeId: string) => void,
  triggerChange: () => void
): FormChange {
  return (event: React.ChangeEvent<any>) => {
    const id = event.target.value;
    setProductType(id);
    triggerChange();
  };
}

export const getChannelsInput = (channels: ChannelPriceAndPreorderData[]) =>
  channels?.map(channel => ({
    data: channel,
    id: channel.id,
    label: channel.name,
    value: {
      costPrice: channel.costPrice || "",
      price: channel.price || "",
      preorderThreshold: channel.preorderThreshold || 0
    }
  }));

export const getAvailabilityVariables = (channels: ChannelData[]) =>
  channels.map(channel => {
    const { isAvailableForPurchase, availableForPurchase } = channel;
    const isAvailable =
      availableForPurchase && !isAvailableForPurchase
        ? true
        : isAvailableForPurchase;

    return {
      availableForPurchaseDate:
        isAvailableForPurchase || availableForPurchase === ""
          ? null
          : availableForPurchase,
      channelId: channel.id,
      isAvailableForPurchase: isAvailable,
      isPublished: channel.isPublished,
      publicationDate: channel.publicationDate,
      visibleInListings: channel.visibleInListings
    };
  });
