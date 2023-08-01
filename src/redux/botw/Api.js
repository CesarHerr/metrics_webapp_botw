import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const urlCategory = 'https://botw-compendium.herokuapp.com/api/v3/compendium/';

const fetchMaterials = createAsyncThunk('cards/fetchMaterials', async () => {
  try {
    const response = await axios.get(`${urlCategory}category/materials`);
    return response.data.data;
  } catch (error) {
    throw error.response;
  }
});

const fetchCreature = createAsyncThunk('cards/fetchCreature', async () => {
  try {
    const response = await axios.get(`${urlCategory}category/creatures`);
    return response.data.data;
  } catch (error) {
    throw error.response;
  }
});

const fetchEquipment = createAsyncThunk('cards/fetchEquipment', async () => {
  try {
    const response = await axios.get(`${urlCategory}category/equipment`);
    return response.data.data;
  } catch (error) {
    throw error.response;
  }
});

const fetchMonsters = createAsyncThunk('cards/fetchMonsters', async () => {
  try {
    const response = await axios.get(`${urlCategory}category/monsters`);
    return response.data.data;
  } catch (error) {
    throw error.response;
  }
});

const fetchTreasures = createAsyncThunk('cards/fetchTreasures', async () => {
  try {
    const response = await axios.get(`${urlCategory}category/treasure`);
    return response.data.data;
  } catch (error) {
    throw error.response;
  }
});

const fetchDetail = createAsyncThunk('cards/fetchDetail', async (end) => {
  try {
    const response = await axios.get(urlCategory + end);
    return response.data.data;
  } catch (error) {
    throw error.response;
  }
});

export {
  fetchMaterials, fetchCreature, fetchEquipment, fetchDetail, fetchMonsters, fetchTreasures,
};
