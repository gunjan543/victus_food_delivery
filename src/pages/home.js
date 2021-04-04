import React,{ useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import HomeStart from "../components/HomeStart";
import SearchBar from "../components/SearchBar";